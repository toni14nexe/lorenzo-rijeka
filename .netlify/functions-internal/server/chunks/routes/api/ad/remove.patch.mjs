import { d as defineEventHandler, r as readBody, c as createError, p as prisma } from '../../../nitro/nitro.mjs';
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

const remove_patch = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required"
    });
  }
  try {
    const ad = await prisma.ad.update({
      where: { id: body.id },
      data: {
        url: null,
        imageUrl: ""
      }
    });
    return ad;
  } catch (error) {
    console.error("Error updating ad:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed updating ad"
    });
  }
});

export { remove_patch as default };
//# sourceMappingURL=remove.patch.mjs.map
