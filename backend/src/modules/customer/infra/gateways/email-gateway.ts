import { PurchaseBusinessException } from "@/src/modules/purchases/infra/exceptions/business-exception";
import nodemailer from "nodemailer";



const transporter = nodemailer.createTransport({
  port: 587,
  secure: false,
  host: process.env.SECRET_EMAIL_HOST,
  auth: {
    user: process.env.SECRET_EMAIL as string,
    pass: process.env.SECRET_PASSWORD as string,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

type EmailGatewaySend = {
  email: string;
  subject: string;
  text: string;
  code: string;
}

export class EmailGateway {

  public async send(params: EmailGatewaySend) {

    // Configurar o e-mail
    const mailOptions = {
      from: process.env.SECRET_EMAIL,
      to: params.email,
      subject: params.subject,
      text: params.text + "Code: " + params.code,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error)
        throw new PurchaseBusinessException("Email Gateway error", 500);
      }
      console.log(info)
      return info;
    });
  }
}