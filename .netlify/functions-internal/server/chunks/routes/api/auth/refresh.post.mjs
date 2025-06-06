import { d as defineEventHandler, g as getHeader, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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
const refresh_post = defineEventHandler(async (event) => {
  var _a;
  const token = (_a = getHeader(event, "Authorization")) == null ? void 0 : _a.split(" ")[1];
  const userData = event.context.user;
  if (!token)
    throw createError({
      statusCode: 401,
      message: "Authorization token is required"
    });
  try {
    const user = await prisma.user.findUnique({
      where: { id: userData.userId }
    });
    if (!user) throw createError({ statusCode: 401, message: "User not found" });
    const newToken = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
    return {
      token: newToken,
      role: user.role
    };
  } catch (error) {
    throw createError({
      statusCode: 401,
      message: "Invalid or expired token"
    });
  }
});

export { refresh_post as default };
//# sourceMappingURL=refresh.post.mjs.map
