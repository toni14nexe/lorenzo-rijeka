import { d as defineEventHandler, r as readBody, p as prisma } from '../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
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
import 'consola';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const index_post = defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await readBody(event);
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const user = await prisma.user.create({
      data: {
        email: body.email.trim().toLowerCase(),
        password: hashedPassword,
        role: body.role,
        firstname: body.firstname,
        lastname: body.lastname,
        mobile: body.mobile,
        country: body.country,
        place: body.place,
        address: body.address,
        verificationToken
      }
    });
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
    const verificationUrl = `${process.env.APP_BASE_URL}/login?token=${verificationToken}`;
    const mailOptions = {
      from: `"Gastarbajter.de" <${process.env.APP_EMAIL}>`,
      to: body.email,
      subject: "Potvrdite svoju email adresu",
      html: `
             <h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastarbajter.de</h1>
             <p>Bok ${body.firstname} ${body.lastname},</p>
             <p>Hvala na registraciji u Gastarbajter.de. Molimo vas potvrdite email otvaranjem linka:</p>
             <a href="${verificationUrl}">Potvrdite email</a>`
    };
    await transporter.sendMail(mailOptions);
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
});

export { index_post as default };
//# sourceMappingURL=index.post8.mjs.map
