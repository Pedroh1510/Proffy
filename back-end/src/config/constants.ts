require('dotenv-safe').config();

export const authMailer = {
	user: process.env.USER_MAIL,
	pass: process.env.PASSWORD_MAIL
};
