import { Connections } from './../entities/Connections';

export interface IConnectionRepository {
	save(data: Connections): Promise<void>;
	findById(id: string): Promise<boolean>;
	count(): Promise<number>;
}
