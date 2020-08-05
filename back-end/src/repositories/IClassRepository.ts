import { Classes, Users, ClassSchedule } from './../entities';

export interface IClassSaveDataRepository {
	classes: Classes;
	user: Users;
	schedule: ClassSchedule[];
}
export interface IClassFilterDataRepository {
	week_day: number;
	subject: string;
	time: number;
}

export interface IClassListDataRepository {
	id: string;
	cost: number;
	subject: string;
	user: {
		id: string;
		name: string;
		bio: string;
		whatsapp: string;
		avatar: string;
	};
	schedules: {
		id: string;
		week_day: number;
		from: number;
		to: number;
	}[];
}

export interface IClassRepository {
	save(data: IClassSaveDataRepository): Promise<void>;
	filter(data: IClassFilterDataRepository): Promise<IClassListDataRepository[]>;
}
