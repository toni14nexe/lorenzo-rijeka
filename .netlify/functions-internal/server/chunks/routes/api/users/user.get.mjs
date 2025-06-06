import { d as defineEventHandler, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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

const user_get = defineEventHandler(async (event) => {
  const userId = event.context.user.userId;
  if (!userId)
    throw createError({
      statusCode: 400,
      statusMessage: "User ID is required"
    });
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
  if (!user)
    throw createError({ statusCode: 404, statusMessage: "User not found" });
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
});

export { user_get as default };
//# sourceMappingURL=user.get.mjs.map
