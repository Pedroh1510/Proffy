import { Column, Entity, PrimaryColumn } from 'typeorm';

import { UsersLogin } from './../../UserLogin';

@Entity('usersLogin')
export class UserLoginTypeOrm implements UsersLogin {
	constructor(props: UsersLogin) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column({ unique: true })
	email: string;

	@Column()
	password: string;

	@Column()
	userId: string;
}
