// pages/api/contact.ts
import { Resend } from 'resend';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.EMAIL_TO_SEND_TO;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("--- API Route Hit ---");
    console.log("Received body:", req.body);
    console.log("Email to send to (from .env):", toEmail);
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const { name, email, message } = req.body;
    if (!name || !email || !message || !toEmail) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const { data, error } = await resend.emails.send({
            from: 'Loke Software <loke@lokesoftware.com>',
            to: [toEmail],
            subject: `New Message from ${name} via Portfolio`,
            replyTo: email,
            html: `<p>You have a new message from your portfolio contact form.</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`,
        });
        if (error) {
            console.log(error);
            return res.status(400).json({ error: 'Error to send email', details: error });
        }
        return res.status(200).json({ message: 'Email sent successfully', data });
    } catch (error) {
        return res.status(500).json({ error: 'Failed to send email', details: error });
    }
}