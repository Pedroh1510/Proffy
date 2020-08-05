import { CountConnectionsController } from './CountConnectionsController';
import { CountConnectionsUseCase } from './CountConnectionsUseCase';
import { ConnectionRepository } from './../../../repositories/implementations/TypeOrm/ConnectionRepository';

const connectionsRepository = new ConnectionRepository();

const countConnectionsUseCase = new CountConnectionsUseCase(
	connectionsRepository
);

const countConnectionsController = new CountConnectionsController(
	countConnectionsUseCase
);

export { countConnectionsController };
