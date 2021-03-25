import { Request, Response } from 'express';

import { IRegisterRequest } from './RegisterDTO';
import { RegisterUseCase } from './RegisterUseCase';

export class RegisterController {
	constructor(private registerUseCase: RegisterUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body as IRegisterRequest;
		try {
			const content = await this.registerUseCase.execute(data);

			return response.status(201).json(content);
		} catch (error) {
			return response.status(400).json({
				message: error.message
			});
		}
	}
}
