import { ClassSchedule, Classes, Users } from './../entities';
import { ProffyProps, ScheduleItemProps, UserProps } from './ILoginRepository';

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

interface ProffyUpdateProps {
	id: string;
	cost: number;
	subject: string;
	classes: ClassSchedule[];
}

export interface IClassListDataRepository {
	user: UserProps;
	proffy: ProffyUpdateProps;
}

export interface IClassRepository {
	save(data: IClassSaveDataRepository): Promise<void>;
	filter(data: IClassFilterDataRepository): Promise<IClassListDataRepository[]>;
	filterUserById(id: string): Promise<Users>;
	filterClassByUserId(id: string): Promise<Classes>;
	updateOnlyUser(user: Users): Promise<void>;
	update(data: IClassListDataRepository): Promise<void>;
}
