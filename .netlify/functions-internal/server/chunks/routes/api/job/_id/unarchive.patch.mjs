import { d as defineEventHandler, c as createError, p as prisma } from '../../../../nitro/nitro.mjs';
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

const unarchive_patch = defineEventHandler(async (event) => {
  const { params } = event.context;
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required"
    });
  }
  try {
    const job = await prisma.job.update({
      where: { id: params.id },
      data: {
        deletedAt: null,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return job;
  } catch (error) {
    console.error("Error updating job:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to job"
    });
  }
});

export { unarchive_patch as default };
//# sourceMappingURL=unarchive.patch.mjs.map
