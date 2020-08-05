import { convertToMinutes } from './../../../utils/convertToMinutes';
import { ICreateClassRequest } from './CreateClassDTO';
import { IClassRepository } from '../../../repositories/IClassRepository';
import { Users, Classes, ClassSchedule } from '../../../entities';

export class CreateClassUseCase {
	constructor(private classRepository: IClassRepository) {}
	async execute(data: ICreateClassRequest): Promise<void> {
		const { name, whatsapp, bio, avatar, cost, schedule, subject } = data;
		const user = new Users({ avatar, bio, name, whatsapp });

		const classFromUser = new Classes({ cost, subject });

		const classSchedule = schedule.map((scheduleItem) => {
			const from = convertToMinutes(scheduleItem.from);
			const to = convertToMinutes(scheduleItem.to);
			const week_day = scheduleItem.week_day;
			return new ClassSchedule({ from, to, week_day });
		});

		await this.classRepository.save({
			classes: classFromUser,
			user,
			schedule: classSchedule,
		});
	}
}
