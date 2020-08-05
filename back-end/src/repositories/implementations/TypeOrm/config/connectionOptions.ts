import { ConnectionOptions } from 'typeorm';
import {
	ClassesTypeOrm,
	ClassScheduleTypeOrm,
	UsersTypeOrm,
	ConnectionsTypeOrm,
} from './../../../../entities/implementations/TypeOrm';

import { resolve } from 'path';
export const sqliteTypeOrmConnection: ConnectionOptions = {
	type: 'sqlite',
	database: resolve(
		__dirname,
		'..',
		'..',
		'..',
		'..',
		'database',
		'sqlite',
		'data.sqlite'
	),
	entities: [
		ClassesTypeOrm,
		ClassScheduleTypeOrm,
		UsersTypeOrm,
		ConnectionsTypeOrm,
	],
	synchronize: true,
};
