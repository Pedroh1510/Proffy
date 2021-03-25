import { Request, Response } from 'express';

import { IUpdateClassRequest } from './UpdateClassDTO';
import { UpdateClassUseCase } from './UpdateClassUseCase';

export class UpdateClassController {
	constructor(private loginUseCase: UpdateClassUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body as IUpdateClassRequest;
		try {
			const content = await this.loginUseCase.execute(data);

			return response.status(202).json(content);
		} catch (error) {
			return response.status(400).json({
				message: error.message
			});
		}
	}
}
