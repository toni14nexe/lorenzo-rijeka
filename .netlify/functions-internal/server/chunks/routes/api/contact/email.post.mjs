import { d as defineEventHandler, r as readBody } from '../../../nitro/nitro.mjs';
import nodemailer from 'nodemailer';
import '@prisma/client';
import '@prisma/extension-accelerate';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import '@primevue/core/base/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'jsonwebtoken';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const email_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = process.env.APP_BASE_URL;
  const transporter = nodemailer.createTransport({
    service: process.env.APP_EMAIL_HOST === "smtp.zoho.eu" ? void 0 : "gmail",
    host: process.env.APP_EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  });
  const mailOptions = {
    from: `"Gastarbajter.de" <${process.env.APP_EMAIL}>`,
    to: process.env.APP_EMAIL,
    subject: `Gastarbajter.de kontakt - ${body.email}`,
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastarbajter.de</h1></a>
           <h3>Kontakt</h3>
           <p>Korisnik: ${body.fullname || "-"}</p>
           <p>Email: ${body.email}</p>
           <br/>
           <p>Poruka:</p>
           <p>${body.message}</p>`
  };
  await transporter.sendMail(mailOptions);
  return { message: "Message is successfully send" };
});

export { email_post as default };
//# sourceMappingURL=email.post.mjs.map
