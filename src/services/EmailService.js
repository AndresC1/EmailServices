import { Resend } from 'resend';
import dotenv from "dotenv"
import ContactLayout from '../layouts/ContactLayout.js';

dotenv.config();

const API_KEY_RESEND = process.env.API_KEY_RESEND;

const resend = new Resend(API_KEY_RESEND);

async function emailSendService(name, subject, message) {
    const { data, error } = await resend.emails.send({
        from: `${subject} <andrescornejolira@acldev.site>`,
        to: ['andrescornejolira@gmail.com'],
        subject: subject,
        html: ContactLayout(subject, name, message)
    });

    if(error){
        throw new Error(`Error: ${error}`);
    }
    console.log("Email success");

    return data;
}

export {
    emailSendService
}