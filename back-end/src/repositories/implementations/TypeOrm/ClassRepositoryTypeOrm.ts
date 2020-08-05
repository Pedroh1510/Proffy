import {
	ClassScheduleTypeOrm,
	UsersTypeOrm,
	ClassesTypeOrm,
} from './../../../entities/implementations/TypeOrm';

import {
	IClassRepository,
	IClassSaveDataRepository,
	IClassFilterDataRepository,
	IClassListDataRepository,
} from './../../IClassRepository';

import { getManager } from 'typeorm';
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
			.leftJoinAndSelect('classes.user_id', 'users')
			.leftJoinAndSelect('classes.schedules', 'schedules')
			.where('schedules.week_day = :week_day', { week_day })
			.andWhere('schedules.from <=:time', { time })
			.andWhere('schedules.to > :time', { time })
			.getMany();

		const classesFiltered = classesFilteredEntity.map((classesEntity) => {
			const { id, cost, subject } = classesEntity;
			const user = { ...classesEntity.user_id };
			const schedules = classesEntity.schedules.map((schedule) => {
				const { id, week_day, from, to } = schedule;
				return { id, week_day, from, to };
			});
			return {
				id,
				cost,
				subject,
				user,
				schedules,
			};
		});

		return classesFiltered;
	}
}
