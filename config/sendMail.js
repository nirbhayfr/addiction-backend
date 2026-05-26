import { resend } from "./mail.js";

export const sendCallbackMail = async (callback) => {
	const formattedDate = new Date().toLocaleString("en-IN", {
		dateStyle: "medium",
		timeStyle: "short",
	});

	await resend.emails.send({
		from: "NAVJEEV Website <support@navjeev.in>",
		to: process.env.OWNER_EMAIL,
		subject: `📞 New Callback Request - ${callback.fullName}`,

		html: `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Callback Request</title>
			</head>
			<body style="margin:0;padding:0;background-color:#f0f4f0;font-family:'Georgia',serif;">

				<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f0;padding:40px 16px;">
					<tr>
						<td align="center">
							<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

								<!-- Header -->
								<tr>
									<td style="background:linear-gradient(135deg,#1a4731 0%,#0f2d1f 100%);border-radius:16px 16px 0 0;padding:36px 40px 32px;text-align:center;">

										<!-- Logo / Brand -->
										<div style="margin-bottom:6px;">
											<span style="font-family:'Georgia',serif;font-size:26px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;line-height:1;">
												Navjeev&nbsp;<span style="color:#9D8542;">Restore Drops</span>
											</span>
										</div>
										<div style="width:48px;height:2px;background:#9D8542;margin:12px auto 18px;border-radius:2px;"></div>
										<p style="margin:0;font-family:'Georgia',serif;font-size:12px;color:#a3c4a3;letter-spacing:3px;text-transform:uppercase;">Client Notification</p>

									</td>
								</tr>

								<!-- Accent Bar -->
								<tr>
									<td style="background:#9D8542;height:4px;"></td>
								</tr>

								<!-- Body Card -->
								<tr>
									<td style="background:#ffffff;padding:40px 40px 32px;border-left:1px solid #e4ede4;border-right:1px solid #e4ede4;">

										<!-- Title row -->
										<table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
											<tr>
												<td>
													<p style="margin:0 0 6px;font-family:'Georgia',serif;font-size:11px;color:#9D8542;letter-spacing:3px;text-transform:uppercase;font-weight:bold;">Incoming Request</p>
													<h1 style="margin:0;font-family:'Georgia',serif;font-size:24px;color:#1a4731;font-weight:900;letter-spacing:-0.3px;">New Callback Request</h1>
												</td>
												<td align="right" valign="top">
													<span style="display:inline-block;background:#f0f7f1;border:1px solid #c6dfc6;color:#1a4731;font-size:11px;font-family:Arial,sans-serif;letter-spacing:1px;text-transform:uppercase;padding:6px 14px;border-radius:20px;font-weight:bold;">Action Required</span>
												</td>
											</tr>
										</table>

										<!-- Divider -->
										<div style="height:1px;background:linear-gradient(to right,#e4ede4,#c6dfc6,#e4ede4);margin-bottom:28px;"></div>

										<!-- Details Table -->
										<table width="100%" cellpadding="0" cellspacing="0">

											<!-- Name -->
											<tr>
												<td style="padding:14px 16px;background:#f8fbf8;border-radius:8px;margin-bottom:8px;display:block;">
													<table width="100%" cellpadding="0" cellspacing="0">
														<tr>
															<td width="140" style="font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;vertical-align:middle;">Full Name</td>
															<td style="font-family:'Georgia',serif;font-size:15px;color:#1a2e1a;font-weight:bold;vertical-align:middle;">${callback.fullName}</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr><td style="height:6px;"></td></tr>

											<!-- Phone -->
											<tr>
												<td style="padding:14px 16px;background:#fffdf5;border-left:3px solid #9D8542;border-radius:0 8px 8px 0;">
													<table width="100%" cellpadding="0" cellspacing="0">
														<tr>
															<td width="140" style="font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;vertical-align:middle;">Phone</td>
															<td style="font-family:'Georgia',serif;font-size:15px;color:#1a2e1a;font-weight:bold;vertical-align:middle;">
																<a href="tel:${callback.phoneNumber}" style="color:#9D8542;text-decoration:none;">${callback.phoneNumber}</a>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr><td style="height:6px;"></td></tr>

											<!-- Urgency + Type side by side -->
											<tr>
												<td>
													<table width="100%" cellpadding="0" cellspacing="0">
														<tr>
															<td width="48%" style="padding:14px 16px;background:#f8fbf8;border-radius:8px;">
																<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Urgency</p>
																<p style="margin:0;font-family:'Georgia',serif;font-size:15px;color:#1a2e1a;font-weight:bold;">${callback.urgency}</p>
															</td>
															<td width="4%"></td>
															<td width="48%" style="padding:14px 16px;background:#f8fbf8;border-radius:8px;">
																<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Type</p>
																<p style="margin:0;font-family:'Georgia',serif;font-size:15px;color:#1a2e1a;font-weight:bold;">${callback.type}</p>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr><td style="height:6px;"></td></tr>

											<!-- Date -->
											<tr>
												<td style="padding:14px 16px;background:#f8fbf8;border-radius:8px;">
													<table width="100%" cellpadding="0" cellspacing="0">
														<tr>
															<td width="140" style="font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;vertical-align:middle;">Received On</td>
															<td style="font-family:'Georgia',serif;font-size:15px;color:#1a2e1a;font-weight:bold;vertical-align:middle;">${formattedDate}</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr><td style="height:6px;"></td></tr>

											<!-- Message -->
											<tr>
												<td style="padding:16px;background:#f8fbf8;border-radius:8px;border-left:3px solid #1a4731;">
													<p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:10px;color:#6b8f6b;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Message</p>
													<p style="margin:0;font-family:'Georgia',serif;font-size:15px;color:#2d402d;line-height:1.75;">${callback.message || "<em style='color:#a0b8a0;'>No message provided</em>"}</p>
												</td>
											</tr>

										</table>

									</td>
								</tr>

								<!-- Footer -->
								<tr>
									<td style="background:#1a4731;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
										<p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#a3c4a3;letter-spacing:1px;">This is an automated notification from</p>
										<p style="margin:0;font-family:'Georgia',serif;font-size:13px;color:#ffffff;font-weight:bold;">
											Navjeev <span style="color:#9D8542;">Restore Drops</span>
										</p>
									</td>
								</tr>

							</table>
						</td>
					</tr>
				</table>

			</body>
			</html>
		`,
	});
};
