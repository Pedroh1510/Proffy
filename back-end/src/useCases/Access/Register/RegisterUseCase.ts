import { UsersLogin } from './../../../entities/UserLogin';
import { Users } from './../../../entities/Users';
import { ILoginRepository } from './../../../repositories/ILoginRepository';
import { encrypt } from './../../../utils/cryptography';
import { IRegisterRequest } from './RegisterDTO';

export class RegisterUseCase {
	constructor(private loginRepository: ILoginRepository) {}
	async execute(data: IRegisterRequest) {
		const { email, password, name } = data;

		if (!email) throw new Error("Missing param 'email'");
		if (!password) throw new Error("Missing param 'password'");
		if (!name) throw new Error("Missing param 'name'");

		const user = new Users({ name });
		const hashPassword = await encrypt(password);
		const login = new UsersLogin({
			email,
			password: hashPassword,
			userId: user.id
		});
		await this.loginRepository.save({ user, login });
	}
}
