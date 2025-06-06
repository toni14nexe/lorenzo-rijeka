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

const update_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.id || !body.imageUrl || !body.price) {
    throw createError({
      statusCode: 400,
      statusMessage: "Body parameter is missing, this body should include: 'id', 'imageUrl' and 'price'."
    });
  }
  try {
    const ad = await prisma.ad.update({
      where: { id: body.id },
      data: {
        url: body.url ? body.url : null,
        imageUrl: body.imageUrl,
        price: Number(body.price)
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

export { update_put as default };
//# sourceMappingURL=update.put.mjs.map
