import express from "express";
import Request from "../models/Request.js";
import { sendCallbackMail } from "../config/sendMail.js";

const router = express.Router();

// CREATE request
router.post("/", async (req, res) => {
	try {
		const data = await Request.create(req.body);

		await sendCallbackMail(data);

		res.status(201).json({
			success: true,
			message: "Request submitted successfully",
			data,
		});
	} catch (err) {
		console.log(err);

		res.status(500).json({
			success: false,
			error: err.message,
		});
	}
});

// GET all requests (admin use)
router.get("/", async (req, res) => {
	const data = await Request.find().sort({ createdAt: -1 });
	res.json(data);
});

// GET single request
router.get("/:id", async (req, res) => {
	const data = await Request.findById(req.params.id);
	res.json(data);
});

export default router;
