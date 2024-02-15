import { PurchaseBusinessException } from "@/src/modules/purchases/infra/exceptions/business-exception";
import nodemailer from "nodemailer";
import { contentMessageTemplate } from "./template";
import fs from "fs";
import Handlebars from "handlebars";
import Mail from "nodemailer/lib/mailer";

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
  path?: string;
  variables?: any;
}

export class EmailGateway {
  public async send(params: EmailGatewaySend) {

    const templateFileContent = fs.readFileSync(params.path!).toString("utf-8");
    const templateParse = Handlebars.compile(templateFileContent);
    const templateHTML = templateParse(params.variables);

    // Configurar o e-mail
    const mailOptions: Mail.Options = {
      from: process.env.SECRET_EMAIL,
      to: params.email,
      subject: params.subject,
      html: templateHTML
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