export interface ILoginRequest {
	email: string;
	password: string;
}

export interface ILoginResponse {
	subject: string;
	cost: string;
	user_id: string;
	name: string;
	avatar: string;
	whatsapp: string;
	bio: string;
}
