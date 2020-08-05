export interface IListRequest {
	week_day: string;
	subject: string;
	time: string;
}

export interface IListResponse {
	id: number;
	subject: string;
	cost: string;
	user_id: string;
	name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
}
[];
