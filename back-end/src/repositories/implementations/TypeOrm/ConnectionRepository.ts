import { UsersTypeOrm } from './../../../entities/implementations/TypeOrm/UsersTypeOrm';
import { Connections } from './../../../entities/Connections';
import { ConnectionsTypeOrm } from './../../../entities/implementations/TypeOrm/ConnectionsTypeOrm';
import { IConnectionRepository } from './../../IConnectionRepository';
import { typeOrmHelper } from './helper/typeOrmHelper';

export class ConnectionRepository implements IConnectionRepository {
	async save(data: Connections) {
		const connectionDb = typeOrmHelper.connection;

		const connectionClass = new ConnectionsTypeOrm(data);

		await connectionDb.manager.save(connectionClass);
	}
	async findById(id: string) {
		const connectionDb = typeOrmHelper.connection;
		const user = await connectionDb.manager
			.getRepository(UsersTypeOrm)
			.findOne(id);

		if (user === undefined) return false;
		return true;
	}
	async count(): Promise<number> {
		const connectionDb = typeOrmHelper.connection;
		const totalConnections = await connectionDb.manager
			.getRepository(ConnectionsTypeOrm)
			.count();
		return totalConnections;
	}
}
