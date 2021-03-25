import {
	ProffyProps,
	UserProps
} from './../../../repositories/ILoginRepository';

export interface IListRequest {
	week_day: number;
	subject: string;
	time: number;
}

export interface IListResponse {
	user: UserProps;
	proffy: ProffyProps;
}
[];
