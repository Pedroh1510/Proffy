import { UsersLogin } from './../entities/UserLogin';
import { Users } from './../entities/Users';

export interface ILoginRepository {
	find(data: ILoginFindDataRepository): Promise<ILoginDataRepository>;
	save(data: ILoginSaveDataRepository): Promise<void>;
	remove(id: string): Promise<void>;
}
export interface ILoginSaveDataRepository {
	user: Users;
	login: UsersLogin;
}

export interface ILoginFindDataRepository {
	email: string;
	password: string;
}

export interface UserProps {
	id: string;
	name: string;
	bio?: string;
	whatsapp?: string;
	avatar?: string;
	isProffy?: boolean;
}

export interface ScheduleItemProps {
	week_day: number;
	from: number;
	to: number;
}

export interface ProffyProps {
	cost: number;
	subject: string;
	classes: ScheduleItemProps[];
}

export interface ILoginDataRepository {
	user: UserProps;
	proffy?: ProffyProps;
}
