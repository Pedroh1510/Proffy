import { Request, Response } from 'express';
import { CountConnectionsUseCase } from './CountConnectionsUseCase';

export class CountConnectionsController {
	constructor(private countConnectionUseCase: CountConnectionsUseCase) {}
	async handle(request: Request, response: Response) {
		const total = await this.countConnectionUseCase.execute();
		return response.json({ total });
	}
}
