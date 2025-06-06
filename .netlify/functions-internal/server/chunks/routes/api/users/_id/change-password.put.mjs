import { d as defineEventHandler, c as createError, r as readBody, p as prisma } from '../../../../nitro/nitro.mjs';
import bcrypt from 'bcrypt';
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

const changePassword_put = defineEventHandler(async (event) => {
  const user = event.context.user;
  const { params } = event.context;
  const userId = params == null ? void 0 : params.id;
  if (!userId) {
    throw createError({
      statusCode: 400,
      statusMessage: "User ID is required"
    });
  }
  if (user.userId !== userId) {
    throw createError({
      statusCode: 403,
      statusMessage: "You are not authorized to change this password"
    });
  }
  const body = await readBody(event);
  const { newPassword } = body;
  if (!newPassword || newPassword.length < 7) {
    throw createError({
      statusCode: 400,
      statusMessage: "New password must be at least 8 characters long"
    });
  }
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword }
  });
  return { message: "Password updated successfully" };
});

export { changePassword_put as default };
//# sourceMappingURL=change-password.put.mjs.map
