import { Connections } from '../../../entities/Connections';
import { IConnectionRepository } from '../../../repositories/IConnectionRepository';
import { ICreateConnectionRequest } from './CreateConnectionDTO';

export class CreateConnectionUseCase {
	constructor(private connectionRepository: IConnectionRepository) {}
	async execute(data: ICreateConnectionRequest) {
		const userExits = await this.connectionRepository.findById(data.user_id);

		if (!userExits) throw new Error('User not exist');

		const connection = new Connections(data.user_id);

		await this.connectionRepository.save(connection);
	}
}
