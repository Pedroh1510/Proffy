import { IClassRepository } from '../../../repositories/IClassRepository';
import { makeObjScheduleItems } from '../../../utils/functions';
import { IUpdateClassRequest } from './UpdateClassDTO';

export class UpdateClassUseCase {
	constructor(private classRepository: IClassRepository) {}
	async execute(data: IUpdateClassRequest) {
		const {
			isProffy,
			name,
			userId,
			avatar,
			bio,
			whatsapp,
			cost,
			schedule,
			subject
		} = data;

		console.log(data);

		if (isProffy === undefined || isProffy === null)
			throw new Error("Missing param 'isProffy'");
		if (!name) throw new Error("Missing param 'name'");
		if (!userId) throw new Error("Missing param 'userId'");
		const user = await this.classRepository.filterUserById(userId);

		if (!user) throw new Error("User doesn't exist");

		user.avatar = avatar;
		user.bio = bio;
		user.whatsapp = whatsapp;
		user.name = name;

		if (user.isProffy !== isProffy)
			throw new Error("Value 'isProffy' inconsistent with the user'");

		if (user.isProffy || isProffy) {
			if (!avatar) throw new Error("Missing param 'avatar'");
			if (!bio) throw new Error("Missing param 'bio'");
			if (!whatsapp) throw new Error("Missing param 'whatsapp'");
			if (!subject) throw new Error("Missing param 'subject'");
			if (!cost) throw new Error("Missing param 'cost'");
			if (!schedule) throw new Error("Missing param 'schedule'");
			for (const item of schedule) {
				if (!item.from) throw new Error("Missing param 'schedule.from'");
				if (!item.to) throw new Error("Missing param 'schedule.to'");
				if (!item.week_day)
					throw new Error("Missing param 'schedule.week_day'");
			}
		}

		if (user.isProffy) {
			const proffy = await this.classRepository.filterClassByUserId(userId);

			proffy.cost = cost;
			proffy.subject = subject;

			await this.classRepository.update({
				user,
				proffy: {
					...proffy,
					classes: makeObjScheduleItems(schedule, proffy.id)
				}
			});
		} else {
			this.classRepository.updateOnlyUser(user);
		}
	}
}
