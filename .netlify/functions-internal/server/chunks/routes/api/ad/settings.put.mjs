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

const settings_put = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    await Promise.all([
      prisma.adSettings.update({
        where: { id: "1" },
        data: { show: Boolean(body["dashboard-side"]) }
      }),
      prisma.adSettings.update({
        where: { id: "2" },
        data: { show: Boolean(body["footer-slider"]) }
      }),
      prisma.adSettings.update({
        where: { id: "3" },
        data: { show: Boolean(body["footer-large"]) }
      })
    ]);
    return;
  } catch (error) {
    console.error("Error updating ad settings:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update ad settings"
    });
  }
});

export { settings_put as default };
//# sourceMappingURL=settings.put.mjs.map
