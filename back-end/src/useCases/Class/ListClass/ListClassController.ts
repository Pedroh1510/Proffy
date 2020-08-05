import { Request, Response } from 'express';
import { ListClassUseCase } from './ListClassUseCase';
import { IListRequest } from './ListClassDTO';

export class ListClassController {
	constructor(private listClassUseCase: ListClassUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.query as IListRequest;
		try {
			const content = await this.listClassUseCase.execute(data);

			return response.status(200).json(content);
		} catch (error) {
			console.log(error);

			return response.status(400).json({
				message: error.message,
			});
		}
	}
}
