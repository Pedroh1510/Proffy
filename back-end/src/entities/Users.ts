import { v4 as uuid } from 'uuid';

export class Users {
	public readonly id: string;
	public name: string;
	public avatar?: string;
	public whatsapp?: string;
	public bio?: string;
	public isProffy?: boolean;
	constructor(props: Omit<Users, 'id'>) {
		Object.assign(this, props);

		if (!this.id) {
			this.id = uuid();
		}
		if (!this.isProffy) {
			this.isProffy = false;
		}
	}
}
