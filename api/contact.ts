
import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const MAX_LENGTH = {
  name: 100,
  email: 254,
  company: 150,
  department: 100,
  message: 5000,
};

const departmentLabels: Record<string, string> = {
  general: "General Enquiry",
  Creintors: "Creintors Test Rigs",
  cautomate: "C-Automate Automation",
  crienviro: "Crienviro Water Treatment",
  education: "3i Ecosystem Education",
  careers: "Careers",
};

const departmentRecipients: Record<string, string[]> = {
  general: ["hr@creintors.com", "hradmin@creintors.com"],
  Creintors: ["sagar.kavadi@creintors.com","sales@creintors.com"],
  cautomate: ["software@cautomate.com","rahul.k@cautomate.com","sheldon.d@cautomate.com","sales@cautomate.com"],
  crienviro: ["parag@crienviro.com","sales@creintors.com"],
  education: ["hr@creintors.com", "hradmin@creintors.com"],
  careers:  ["hr@creintors.com", "hradmin@creintors.com"],
};

function cleanText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({
      success: false,
      message: "Method not allowed.",
    });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPassword) {
    console.error("SMTP configuration is missing.");
    return res.status(500).json({
      success: false,
      message: "Email service is not configured. Please try again later.",
    });
  }

  const body =
    req.body &&
    typeof req.body === "object" &&
    !Array.isArray(req.body)
      ? req.body
      : {};

  // Honeypot: silently reject automated form submissions.
  if (
    typeof body.website === "string" &&
    body.website.trim() !== ""
  ) {
    return res.status(200).json({ success: true });
  }

  const name = cleanText(body.name, MAX_LENGTH.name);
  const email = cleanText(body.email, MAX_LENGTH.email);
  const company = cleanText(body.company, MAX_LENGTH.company);
  const department = cleanText(
    body.department,
    MAX_LENGTH.department,
  );
  const message = cleanText(body.message, MAX_LENGTH.message);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate form details.
  if (
    !name ||
    !emailPattern.test(email) ||
    !message ||
    (department !== "" &&
      !Object.prototype.hasOwnProperty.call(
        departmentLabels,
        department,
      ))
  ) {
    return res.status(400).json({
      success: false,
      message: "Please check the form details and try again.",
    });
  }

  // Get department display name and email recipients.
  const departmentName =
    departmentLabels[department] || "General Enquiry";

  const recipients =
    departmentRecipients[department] ||
    departmentRecipients.general;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });

  try {
    await transporter.sendMail({
      from: {
        name: "Creintors Website",
        address: smtpUser,
      },
      to: recipients,
      replyTo: {
        name,
        address: email,
      },
      subject: `Website Enquiry: ${departmentName}`,
      text: [
        "New contact enquiry received from the Creintors website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Department: ${departmentName}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact email delivery failed:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return res.status(502).json({
      success: false,
      message: "Unable to send your message right now. Please try again.",
    });
  }
}
