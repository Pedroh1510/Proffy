import { UsersTypeOrm } from './UsersTypeOrm';
import { ClassScheduleTypeOrm } from './ClassScheduleTypeOrm';
import { Classes } from './../../Classes';
import {
	Column,
	PrimaryColumn,
	Entity,
	OneToMany,
	ManyToOne,
	JoinTable,
	JoinColumn,
} from 'typeorm';

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
}
