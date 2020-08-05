import { IConnectionRepository } from './../../../repositories/IConnectionRepository';
export class CountConnectionsUseCase {
	constructor(private connectionRepository: IConnectionRepository) {}
	async execute() {
		const total = await this.connectionRepository.count();

		return total;
	}
}
