import { Router } from "express";
import { Request, Response } from "express";
const router = Router();
//@ts-ignore
import sendInBlue from 'sib-api-v3-sdk'

router.post('/sendEmail', async(req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    try {
        
        const client = sendInBlue.ApiClient.instance;
        const apiKey = client.authentications['api-key'];
        apiKey.apiKey = process.env.API_KEY;//please write your smtp key of send in blue api
        const sender = {email:email};
        const reciever = [ {email: 'yourgmail@.com' }] //please write your email here
        const transactionalEmailApi = new sendInBlue.TransactionalEmailsApi();
        
        await transactionalEmailApi.sendTransacEmail({
            sender,
            to: reciever,
            subject: subject,
            htmlContent: `<h1>${name}</h1><p>${message}</p>`
        });

    } catch (error) {
        console.log('Error while sending email', error);
        res.status(500).json({message: 'Internal server error!'});
    }
})

export default router;