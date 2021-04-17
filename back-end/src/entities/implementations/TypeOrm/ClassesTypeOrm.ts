import {
	Column,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToOne,
	OneToMany,
	PrimaryColumn
} from 'typeorm';

import { Classes } from './../../Classes';
import { ClassScheduleTypeOrm } from './ClassScheduleTypeOrm';
import { UsersTypeOrm } from './UsersTypeOrm';

@Entity('classes')
export class ClassesTypeOrm implements Classes {
	constructor(props: Classes) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	cost: number;

	@Column()
	subject: string;

	@OneToMany(() => ClassScheduleTypeOrm, (classSchedule) => classSchedule.class)
	schedules: ClassScheduleTypeOrm[];

	@ManyToOne(() => UsersTypeOrm, (user) => user.id)
	user_id: UsersTypeOrm;

	@Column({ unique: true })
	userId: string;
}
