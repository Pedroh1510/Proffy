import nodemailer from 'nodemailer';

import { authMailer } from '../config/constants';

const smtpTransport = nodemailer.createTransport({
	// host: 'smtp.gmail.com',
	// port: 587,
	// secure: false,
	service: 'Gmail',
	auth: authMailer
});

export const sendMail = async ({ to, subject, text }) => {
	return await smtpTransport
		.sendMail({ from: authMailer.user, to, subject, text })
		.then(() => true)
		.catch((err) => {
			console.log(err);
			return false;
		});
};
