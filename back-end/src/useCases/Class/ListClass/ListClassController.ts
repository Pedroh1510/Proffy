import { Request, Response } from 'express';

import { IListRequest } from './ListClassDTO';
import { ListClassUseCase } from './ListClassUseCase';

export class ListClassController {
	constructor(private listClassUseCase: ListClassUseCase) {}
	async handle(request: Request, response: Response) {
		const data = (request.query as unknown) as IListRequest;
		try {
			const content = await this.listClassUseCase.execute(data);

			return response.status(200).json(content);
		} catch (error) {
			return response.status(400).json({
				message: error.message
			});
		}
	}
}
