import { d as defineEventHandler, p as prisma } from '../../nitro/nitro.mjs';
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
  const [adSettings, ads] = await Promise.all([
    prisma.adSettings.findMany({ orderBy: { id: "asc" } }),
    prisma.ad.findMany({ orderBy: { id: "asc" } })
  ]);
  return { adSettings, ads };
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
