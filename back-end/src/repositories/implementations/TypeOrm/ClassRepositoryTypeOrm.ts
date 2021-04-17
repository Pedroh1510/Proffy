import { getManager } from 'typeorm';

import { Users } from './../../../entities';
import {
	ClassScheduleTypeOrm,
	ClassesTypeOrm,
	UsersTypeOrm
} from './../../../entities/implementations/TypeOrm';
import {
	IClassFilterDataRepository,
	IClassListDataRepository,
	IClassRepository,
	IClassSaveDataRepository
} from './../../IClassRepository';
import { typeOrmHelper } from './helper/typeOrmHelper';

export class ClassRepositoryTypeOrm implements IClassRepository {
	async save(data: IClassSaveDataRepository): Promise<void> {
		const user = new UsersTypeOrm(data.user);

		const classUser = new ClassesTypeOrm(data.classes);
		classUser.user_id = user;

		const schedules = data.schedule.map((schedule) => {
			const scheduleEntity = new ClassScheduleTypeOrm(schedule);

			scheduleEntity.class = classUser;
			return scheduleEntity;
		});

		classUser.schedules = schedules;

		await getManager().transaction(async (transactionEntityManager) => {
			await transactionEntityManager.save(user);
			await transactionEntityManager.save(classUser);
			await transactionEntityManager.save(schedules);
		});
	}

	async filter(
		data: IClassFilterDataRepository
	): Promise<IClassListDataRepository[]> {
		const connection = typeOrmHelper.connection;
		const { subject, time, week_day } = data;

		const classesFilteredEntity = await connection
			.getRepository(ClassesTypeOrm)
			.createQueryBuilder('classes')
			.andWhere('classes.subject <=> ', { subject })
			.innerJoinAndSelect('classes.user_id', 'users')
			.leftJoinAndSelect('classes.schedules', 'schedules')
			.where('schedules.week_day = :week_day', { week_day })
			.andWhere('schedules.from <=:time', { time })
			.andWhere('schedules.to > :time', { time })
			.getMany();

		const classesFiltered = classesFilteredEntity.map((classesEntity) => {
			const { cost, subject } = classesEntity;
			const user = { ...classesEntity.user_id };
			const schedules = classesEntity.schedules.map((schedule) => {
				const { week_day, from, to } = schedule;
				return { week_day, from, to };
			});
			return {
				user,
				proffy: {
					cost,
					subject,
					schedules
				}
			};
		});

		return classesFiltered;
	}

	async getAll() {
		// const classes = await getManager().query('SELECT * FROM classes');
		const classes = await getManager()
			.getRepository(ClassesTypeOrm)
			.createQueryBuilder('classes')
			.innerJoinAndSelect('classes.user_id', 'users')
			.leftJoinAndSelect('classes.schedules', 'schedules')
			.getMany();

		console.log(classes);
		const classesFiltered = classes.map((classesEntity) => {
			const { cost, subject } = classesEntity;
			const user = { ...classesEntity.user_id };
			const schedules = classesEntity.schedules.map((schedule) => {
				const { week_day, from, to } = schedule;
				return { week_day, from, to };
			});
			return {
				user,
				proffy: {
					cost,
					subject,
					schedules
				}
			};
		});
		return classesFiltered;
	}

	async filterUserById(id: string) {
		const user = await getManager()
			.getRepository(UsersTypeOrm)
			.findOne({ where: { id } });
		if (!user) return null;
		return user;
	}

	async filterClassByUserId(id: string) {
		const classe = await getManager()
			.getRepository(ClassesTypeOrm)
			.findOne({ where: { userId: id } });
		if (!classe) return null;
		return classe;
	}

	async updateOnlyUser(user: Users) {
		await getManager().getRepository(UsersTypeOrm).save(new UsersTypeOrm(user));
	}

	async update(data: IClassListDataRepository) {
		const { user } = data;
		const { subject, id, cost, classes } = data.proffy;
		console.log(classes);

		const classe = new ClassesTypeOrm({ id, userId: user.id, subject, cost });

		const schedules = classes.map((schedule) => {
			const scheduleEntity = new ClassScheduleTypeOrm(schedule);

			scheduleEntity.class = classe;
			return scheduleEntity;
		});

		const oldItems = await getManager()
			.getRepository(ClassScheduleTypeOrm)
			.find({ where: { subjectId: classe.id } });

		await getManager().transaction(async (transactionEntityManager) => {
			await transactionEntityManager.remove(oldItems);
			await transactionEntityManager.save(new UsersTypeOrm(user));
			await transactionEntityManager.save(classe);
			await transactionEntityManager.save(schedules);
		});
	}
}
