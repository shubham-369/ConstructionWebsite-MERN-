"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//@ts-ignore
const sib_api_v3_sdk_1 = __importDefault(require("sib-api-v3-sdk"));
router.post('/sendEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, subject, message } = req.body;
    try {
        const client = sib_api_v3_sdk_1.default.ApiClient.instance;
        const apiKey = client.authentications['api-key'];
        apiKey.apiKey = process.env.API_KEY;
        const sender = { email: 'shubham.srivastav666@gmail.com' };
        const reciever = [{ email: email }];
        const transactionalEmailApi = new sib_api_v3_sdk_1.default.TransactionalEmailsApi();
        yield transactionalEmailApi.sendTransacEmail({
            sender,
            to: reciever,
            subject: subject,
            htmlContent: `<h1>${name}</h1><p>${message}</p>`
        });
    }
    catch (error) {
        console.log('Error while sending email', error);
        res.status(500).json({ message: 'Internal server error!' });
    }
}));
exports.default = router;
