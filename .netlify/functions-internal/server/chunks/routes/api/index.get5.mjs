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

const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const perPage = Number(query.perPage) || 10;
  const page = Number(query.page) || 1;
  const skip = (page - 1) * perPage;
  const search = String(query.search || "");
  const [orders, total] = await Promise.all([
    prisma.order.findMany({
      where: {
        deletedAt: null,
        ...search && {
          OR: [
            { id: { contains: search, mode: "insensitive" } },
            { buyerFullname: { contains: search, mode: "insensitive" } },
            { product: { name: { contains: search, mode: "insensitive" } } }
          ]
        }
      },
      orderBy: { createdAt: "desc" },
      skip,
      take: perPage,
      include: { product: true }
    }),
    prisma.order.count({ where: { deletedAt: null } })
  ]);
  return { orders, total };
});

export { index_get as default };
//# sourceMappingURL=index.get5.mjs.map
