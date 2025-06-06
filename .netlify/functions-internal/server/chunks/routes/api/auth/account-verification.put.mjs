import { d as defineEventHandler, r as readBody, p as prisma, c as createError } from '../../../nitro/nitro.mjs';
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

const accountVerification_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await prisma.user.findFirst({
    where: { verificationToken: body.token }
  });
  if (user == null ? void 0 : user.verified) return { message: "Email is already verificated" };
  if (!user)
    throw createError({
      statusCode: 404,
      message: "Invalid verification token"
    });
  await prisma.user.update({
    where: { id: user.id },
    data: {
      verified: true
    }
  });
  return { message: "Email verified successfully" };
});

export { accountVerification_put as default };
//# sourceMappingURL=account-verification.put.mjs.map
