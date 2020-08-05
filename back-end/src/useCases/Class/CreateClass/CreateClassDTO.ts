export interface ICreateClassRequest {
	name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
	subject: string;
	cost: number;
	schedule: [{ week_day: number; from: string; to: string }];
}
