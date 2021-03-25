import { ILoginRepository } from './../../../repositories/ILoginRepository';
import { ILoginRequest } from './LoginDTO';

export class LoginUseCase {
	constructor(private loginRepository: ILoginRepository) {}
	async execute(data: ILoginRequest) {
		const { email, password } = data;

		if (!email) throw new Error("Missing param 'email'");
		if (!password) throw new Error("Missing param 'password'");

		const loginData = await this.loginRepository.find({ email, password });

		if (!loginData) throw new Error('Invalid email or password');

		return loginData;
	}
}
