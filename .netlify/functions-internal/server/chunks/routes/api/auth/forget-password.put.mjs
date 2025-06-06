import { d as defineEventHandler, r as readBody, p as prisma, c as createError } from '../../../nitro/nitro.mjs';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const forgetPassword_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await prisma.user.findUnique({
    where: { email: body.email }
  });
  if (!user)
    throw createError({
      statusCode: 404,
      message: "Invalid forget password email"
    });
  const forgetPassHash = crypto.randomBytes(32).toString("hex");
  await prisma.user.update({
    where: { email: body.email },
    data: {
      forgetPassHash
    }
  });
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
  const verificationUrl = `${process.env.APP_BASE_URL}/reset-password?token=${forgetPassHash}`;
  const mailOptions = {
    from: `"Gastarbajter.de" <${process.env.APP_EMAIL}>`,
    to: body.email,
    subject: "Promijenite svoju lozinku",
    html: `
           <a href="${url}" style="text-decoration: none"><h1 style="background-color: #409EFF; color: white; width: fit-content; padding: 0 15px 0 14px; border-radius: 4px">Gastarbajter.de</h1></a>
           <p>Bok ${user.firstname} ${user.lastname},</p>
           <p>Zatra\u017Eili ste promijenu lozinke. Molimo vas pristupite promijeni lozinke otvaranjem linka:</p>
           <a href="${verificationUrl}">Promijenite lozinku</a>`
  };
  await transporter.sendMail(mailOptions);
  return { message: "Forget password request successfully performed" };
});

export { forgetPassword_put as default };
//# sourceMappingURL=forget-password.put.mjs.map
