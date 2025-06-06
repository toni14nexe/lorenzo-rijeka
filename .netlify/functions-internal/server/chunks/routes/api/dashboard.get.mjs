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

const dashboard_get = defineEventHandler(async (event) => {
  const [news, cards] = await Promise.all([
    prisma.news.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 7,
      include: { category: true }
    }),
    prisma.dashboardCard.findMany({
      orderBy: { position: "asc" }
    })
  ]);
  return { news, cards };
});

export { dashboard_get as default };
//# sourceMappingURL=dashboard.get.mjs.map
