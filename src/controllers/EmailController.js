import { Resend } from 'resend';
import { emailSendService } from '../services/EmailService.js';

async function sendEmail(req, res){
    try{
        const { name, subject, message } = req.body;
        await emailSendService(name, subject, message);
        res.status(200).json({
            "message": "success"
        })
    } catch (error){
        console.error("Error: "+error);
        res.status(500).send(error.message);
    }
}

export {
    sendEmail
}