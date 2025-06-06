import { d as defineEventHandler, r as readBody, p as prisma, c as createError } from '../../../nitro/nitro.mjs';
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

const resetPassword_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await prisma.user.findFirst({
    where: { forgetPassHash: body.forgetPassHash }
  });
  if (!user)
    throw createError({
      statusCode: 404,
      message: "User not find!"
    });
  const hashedPassword = await bcrypt.hash(body.password, 10);
  await prisma.user.update({
    where: { email: user.email },
    data: {
      password: hashedPassword,
      forgetPassHash: null
    }
  });
  return { message: "Password changed successfully" };
});

export { resetPassword_put as default };
//# sourceMappingURL=reset-password.put.mjs.map
