import { v4 as uuid } from 'uuid';

export class Connections {
	public readonly id: string;
	public user_id: string;
	public readonly create_at: string;

	constructor(user_id?: string) {
		this.user_id = user_id;
		if (!this.id) {
			this.id = uuid();
			const now = new Date();
			this.create_at = now.toUTCString();
		}
	}
}
