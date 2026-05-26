import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async ({ to, subject, html }) => {
	try {
		const response = await resend.emails.send({
			from: "NAVJEEV Website <support@navjeev.in",
			to,
			subject,
			html,
		});

		return response;
	} catch (error) {
		console.log("Resend Error:", error);
		throw error;
	}
};
