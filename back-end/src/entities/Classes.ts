import { v4 as uuid } from 'uuid';

export class Classes {
	public readonly id: string;
	public subject: string;
	public cost: number;
	public userId: string;

	constructor(props: Omit<Classes, 'id'>) {
		Object.assign(this, props);
		if (!this.id) {
			this.id = uuid();
		}
	}
}
