import { Request, Response } from 'express';

import { ILoginRequest } from './LoginDTO';
import { LoginUseCase } from './LoginUseCase';

export class LoginController {
	constructor(private loginUseCase: LoginUseCase) {}
	async handle(request: Request, response: Response) {
		const data = request.body as ILoginRequest;
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
