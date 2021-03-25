import { ILoginRepository } from './../../../repositories/ILoginRepository';
import { IRemoveRequest } from './RemoveDTO';

export class RemoveUseCase {
	constructor(private loginRepository: ILoginRepository) {}
	async execute(data: IRemoveRequest) {
		const { userId } = data;

		if (!userId) throw new Error("Missing param 'userId'");
		await this.loginRepository.remove(userId);
	}
}
