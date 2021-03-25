import { v4 as uuid } from 'uuid';

export class UsersLogin {
	public readonly id: string;
	public email: string;
	public password: string;
	public userId: string;
	constructor(props: Omit<UsersLogin, 'id'>) {
		Object.assign(this, props);

		if (!this.id) {
			this.id = uuid();
		}
	}
}
