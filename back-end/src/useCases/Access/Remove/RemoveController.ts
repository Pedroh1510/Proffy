import { Request, Response } from 'express';

import { IRemoveRequest } from './RemoveDTO';

export class RemoveController {
	constructor(private removeUseCase: RemoveUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body as IRemoveRequest;
		try {
			const content = await this.removeUseCase.execute(data);

			return response.status(204).json(content);
		} catch (error) {
			return response.status(400).json({
				message: error.message
			});
		}
	}
}
