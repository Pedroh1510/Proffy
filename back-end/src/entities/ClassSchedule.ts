import { v4 as uuid } from 'uuid';

export class ClassSchedule {
	public readonly id: string;
	public week_day: number;
	public from: number;
	public to: number;
	public subjectId: string;
	constructor(props: Omit<ClassSchedule, 'id'>) {
		Object.assign(this, props);
		if (!this.id) {
			this.id = uuid();
		}
	}
}
