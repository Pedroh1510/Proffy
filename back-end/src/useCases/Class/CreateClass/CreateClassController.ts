import { Request, Response } from 'express';

import { ICreateClassRequest } from './CreateClassDTO';
import { CreateClassUseCase } from './CreateClassUseCase';

export class CreateClassController {
	constructor(private createClassUseCase: CreateClassUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body as ICreateClassRequest;

		try {
			await this.createClassUseCase.execute(data);

			return response.status(201).send();
		} catch (error) {
			return response.status(400).json({
				message: error.message
			});
		}
	}
}
