import { Column, Entity, PrimaryColumn } from 'typeorm';

import { Users } from './../../Users';

@Entity('users')
export class UsersTypeOrm implements Users {
	constructor(props: Users) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column({ nullable: true })
	bio?: string;

	@Column({ nullable: true })
	whatsapp?: string;

	@Column({ nullable: true })
	avatar?: string;

	@Column({ nullable: true })
	isProffy?: boolean;
}
