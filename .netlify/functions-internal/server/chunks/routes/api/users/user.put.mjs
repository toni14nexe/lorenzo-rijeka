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

const user_put = defineEventHandler(async (event) => {
  const userId = event.context.user.userId;
  const body = await readBody(event);
  if (body.password) body.password = await bcrypt.hash(body.password, 10);
  try {
    const user = await prisma.user.update({
      where: {
        id: userId
      },
      data: {
        ...body
      }
    });
    const { password, ...userWithoutPassword } = user;
    return {
      statusCode: 200,
      user: userWithoutPassword
    };
  } catch (error) {
    console.error("Error updating user:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update user"
    });
  }
});

export { user_put as default };
//# sourceMappingURL=user.put.mjs.map
