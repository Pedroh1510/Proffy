import { ClassScheduleTypeOrm } from './ClassScheduleTypeOrm';
import { ClassesTypeOrm } from './ClassesTypeOrm';
import { Users } from './../../Users';
import { Column, PrimaryColumn, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class UsersTypeOrm implements Users {
	constructor(props: Users) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	bio: string;

	@Column()
	whatsapp: string;

	@Column()
	avatar: string;
}
