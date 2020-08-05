import { ClassSchedule } from './../../ClassSchedule';
import { Column, PrimaryColumn, Entity, ManyToOne, JoinColumn } from 'typeorm';
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
		onUpdate: 'CASCADE',
	})
	class: ClassesTypeOrm;
}
