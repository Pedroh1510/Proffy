import { UsersTypeOrm } from './UsersTypeOrm';
import { Connections } from './../../Connections';
import { OneToOne, PrimaryColumn, Entity, JoinColumn, Column } from 'typeorm';

@Entity('connections')
export class ConnectionsTypeOrm implements Connections {
	constructor(props: Connections) {
		Object.assign(this, props);
	}
	@PrimaryColumn('uuid')
	id: string;

	@Column()
	user_id: string;

	@Column({ unique: false })
	create_at: string;
}
