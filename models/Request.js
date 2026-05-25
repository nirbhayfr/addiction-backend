import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
	{
		fullName: String,
		phoneNumber: String,
		urgency: String,
		message: String,
		type: {
			type: String,
			default: "callback",
		},
		status: {
			type: String,
			default: "new",
		},
	},
	{ timestamps: true },
);

export default mongoose.model("Request", requestSchema);
