import { d as defineEventHandler, a as getQuery, p as prisma } from '../../nitro/nitro.mjs';
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

const dashboardCategorized_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const type = String(query.type || "portal");
  let data = void 0;
  if (type === "webshop")
    data = await prisma.product.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { productCategory: true }
    });
  else if (type === "jobs")
    data = await prisma.job.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { jobCategory: true }
    });
  else
    data = await prisma.news.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "desc" },
      take: 3,
      include: { category: true }
    });
  return { ...data };
});

export { dashboardCategorized_get as default };
//# sourceMappingURL=dashboard-categorized.get.mjs.map
