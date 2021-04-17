import { getManager } from 'typeorm';

import { ClassesTypeOrm } from './../../../entities/implementations/TypeOrm/ClassesTypeOrm';
import { UserLoginTypeOrm } from './../../../entities/implementations/TypeOrm/UsersLoginTypeOrm';
import { UsersTypeOrm } from './../../../entities/implementations/TypeOrm/UsersTypeOrm';
import { isValidHash } from './../../../utils/cryptography';
import {
	ILoginFindDataRepository,
	ILoginRepository,
	ILoginSaveDataRepository
} from './../../ILoginRepository';
import { typeOrmHelper } from './helper/typeOrmHelper';

export class LoginRepository implements ILoginRepository {
	async find(data: ILoginFindDataRepository) {
		const { email, password } = data;
		const connection = typeOrmHelper.connection;
		const loginData = await connection
			.getRepository(UserLoginTypeOrm)
			.findOne({ where: { email } });

		if (loginData === undefined) return null;

		if (!(await isValidHash({ text: password, hash: loginData.password }))) {
			return null;
		}

		const user = await getManager()
			.getRepository(UsersTypeOrm)
			.findOne({ where: { id: loginData.userId } });

		if (user === undefined) return null;
		if (user.isProffy) {
			const proffy = await connection
				.getRepository(ClassesTypeOrm)
				.createQueryBuilder('classes')
				.leftJoinAndSelect('classes.schedules', 'schedules')
				.where('classes.userId ', { userId: user.id })
				.getOne();
			return { user, proffy };
		}
		return { user };
	}

	async save(data: ILoginSaveDataRepository) {
		const user = new UsersTypeOrm(data.user);

		await getManager().transaction(async (transactionEntityManager) => {
			await transactionEntityManager.save(user);
			await transactionEntityManager.save(new UserLoginTypeOrm(data.login));
		});
	}

	async remove(userid: string) {
		const user = await getManager()
			.getRepository(UsersTypeOrm)
			.find({ where: { id: userid } });
		const login = await getManager()
			.getRepository(UserLoginTypeOrm)
			.find({ where: { userId: userid } });
		const classe = await getManager()
			.getRepository(ClassesTypeOrm)
			.find({ where: { userId: userid } });

		await getManager().transaction(async (transactionEntityManager) => {
			await transactionEntityManager.remove(login);
			await transactionEntityManager.remove(classe);
			await transactionEntityManager.remove(user);
		});
	}
}
