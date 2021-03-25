import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import { ClassSchedule } from './../../ClassSchedule';
import { ClassesTypeOrm } from './ClassesTypeOrm';

@Entity('class_schedule')
export class ClassScheduleTypeOrm implements ClassSchedule {
	constructor(props: ClassSchedule) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	week_day: number;

	@Column()
	from: number;

	@Column()
	to: number;

	@ManyToOne(() => ClassesTypeOrm, (classes) => classes.id, {
		cascade: true,
		onDelete: 'CASCADE',
		onUpdate: 'CASCADE'
	})
	class: ClassesTypeOrm;

	@Column()
	subjectId: string;
}
