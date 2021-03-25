export interface IUpdateClassRequest {
	userId: string;
	name: string;
	bio?: string;
	whatsapp?: string;
	avatar?: string;
	isProffy: boolean;
	cost?: number;
	subject?: string;
	schedule?: {
		week_day: number;
		from: number;
		to: number;
	}[];
}
