import { d as defineEventHandler, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  const checkingEmail = email.trim().toLowerCase();
  if (!checkingEmail || !password) {
    throw createError({
      statusCode: 400,
      message: "Email and password are required"
    });
  }
  let user = await prisma.user.findUnique({
    where: { email: checkingEmail }
  });
  if (!user || !await bcrypt.compare(password, user.password))
    throw createError({ statusCode: 401, message: "Invalid email or password" });
  if (!user.verified)
    throw createError({
      statusCode: 403,
      message: "Account is not verified yet"
    });
  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: "2h" }
    // Token expiry time
  );
  if (user.firstLogin) {
    user = await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: /* @__PURE__ */ new Date() }
    });
  } else {
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        firstLogin: /* @__PURE__ */ new Date(),
        lastLogin: /* @__PURE__ */ new Date()
      }
    });
  }
  return {
    token,
    role: user.role
  };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
