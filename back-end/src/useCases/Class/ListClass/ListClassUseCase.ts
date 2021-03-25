import { IClassRepository } from './../../../repositories/IClassRepository';
import { IListRequest } from './ListClassDTO';

export class ListClassUseCase {
	constructor(private classRepository: IClassRepository) {}
	async execute(data: IListRequest) {
		const { week_day, time, subject } = data;

		const classes = await this.classRepository.filter({
			subject,
			time,
			week_day
		});

		return classes;
	}
}
