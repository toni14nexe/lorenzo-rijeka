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

const index_get = defineEventHandler(async (event) => {
  const { params } = event.context;
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required"
    });
  }
  const job = await prisma.job.findUnique({
    where: {
      id: params.id,
      deletedAt: null
    },
    include: { jobCategory: true }
  });
  if (!job) {
    throw createError({
      statusCode: 404,
      statusMessage: "Job not found or deleted"
    });
  }
  return job;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
