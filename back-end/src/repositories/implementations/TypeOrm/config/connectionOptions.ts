import { resolve } from 'path';

import { ConnectionOptions } from 'typeorm';

import {
	ClassScheduleTypeOrm,
	ClassesTypeOrm,
	ConnectionsTypeOrm,
	UserLoginTypeOrm,
	UsersTypeOrm
} from './../../../../entities/implementations/TypeOrm';

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
		UserLoginTypeOrm
	],
	synchronize: true
};
