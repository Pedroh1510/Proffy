import { IClassRepository } from './../../../repositories/IClassRepository';
import { convertToMinutes } from './../../../utils/convertToMinutes';
import { IListRequest } from './ListClassDTO';

export class ListClassUseCase {
	constructor(private classRepository: IClassRepository) {}
	async execute(data: IListRequest) {
		if (!data.week_day || !data.subject || !data.time) {
			throw new Error('Missing filters to search classes');
		}

		const timeInMinutes = convertToMinutes(data.time);

		const classes = await this.classRepository.filter({
			subject: data.subject,
			time: timeInMinutes,
			week_day: Number(data.week_day),
		});

		return classes;
	}
}
