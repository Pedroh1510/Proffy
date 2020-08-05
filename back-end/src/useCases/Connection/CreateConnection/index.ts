import { CreateConnectionUseCase } from './CreateConnectionUseCase';
import { ConnectionRepository } from '../../../repositories/implementations/TypeOrm/ConnectionRepository';
import { CreateConnectionController } from './CreateConnectionController';

const connectionRepository = new ConnectionRepository();

const createConnectionUseCase = new CreateConnectionUseCase(
	connectionRepository
);

const createConnectionController = new CreateConnectionController(
	createConnectionUseCase
);

export { createConnectionController };
