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
  const deletedOnly = query.deletedOnly === "true";
  const search = query.search || "";
  const categoryIds = query.categoryIds ? String(query.categoryIds).split(",").map((id) => id.trim()) : void 0;
  const where = query.categoryIds ? {
    deletedAt: deletedOnly ? { not: null } : null,
    productCategoryId: { in: categoryIds }
  } : { deletedAt: deletedOnly ? { not: null } : null };
  if (search)
    where.name = {
      contains: search,
      mode: "insensitive"
    };
  const [products, total] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: perPage,
      include: { productCategory: true }
    }),
    prisma.product.count({ where })
  ]);
  return { products, total };
});

export { index_get as default };
//# sourceMappingURL=index.get9.mjs.map
