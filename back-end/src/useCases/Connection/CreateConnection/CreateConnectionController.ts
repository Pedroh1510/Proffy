import { Request, Response } from 'express';
import { CreateConnectionUseCase } from './CreateConnectionUseCase';

export class CreateConnectionController {
	constructor(private createConnectionUseCase: CreateConnectionUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body;

		try {
			await this.createConnectionUseCase.execute(data);

			return response.status(201).send();
		} catch (error) {
			return response.status(400).json({
				message: error.message,
			});
		}
	}
}
