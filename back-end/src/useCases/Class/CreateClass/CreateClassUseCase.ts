import { convertToMinutes } from './../../../utils/convertToMinutes';
import { makeObjScheduleItems } from './../../../utils/functions';
import { ClassSchedule, Classes, Users } from '../../../entities';
import { IClassRepository } from '../../../repositories/IClassRepository';
import { ICreateClassRequest } from './CreateClassDTO';

export class CreateClassUseCase {
	constructor(private classRepository: IClassRepository) {}
	async execute(data: ICreateClassRequest): Promise<void> {
		const {
			userId,
			avatar,
			bio,
			name,
			whatsapp,
			isProffy,
			cost,
			schedule,
			subject
		} = data;

		if (!userId) throw new Error('Missing param "userId"');
		if (!avatar) throw new Error('Missing param "avatar"');
		if (!bio) throw new Error('Missing param "bio"');
		if (!name) throw new Error('Missing param "name"');
		if (!whatsapp) throw new Error('Missing param "whatsapp"');
		if (isProffy === undefined) throw new Error('Missing param "isProffy"');
		if (!cost) throw new Error('Missing param "cost"');
		if (!schedule) throw new Error('Missing param "schedule"');
		if (!subject) throw new Error('Missing param "subject"');

		if (isProffy) throw new Error('is already a teacher');

		const user = await this.classRepository.filterUserById(userId);

		if (!user) throw new Error('Invalid userId');

		user.bio = bio;
		user.whatsapp = whatsapp;

		user.isProffy = true;
		const classFromUser = new Classes({ cost, subject, userId });

		await this.classRepository.save({
			classes: classFromUser,
			user,
			schedule: makeObjScheduleItems(schedule, classFromUser.id)
		});
	}
}
