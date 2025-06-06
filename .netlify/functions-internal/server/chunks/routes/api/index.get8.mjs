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
  const deletedOnly = query.deletedOnly === "true";
  const search = query.search || "";
  if (deletedOnly) var where = { deletedAt: { not: null } };
  else where = { deletedAt: null };
  if (search)
    where.name = {
      contains: search,
      mode: "insensitive"
    };
  const categories = await prisma.productCategory.findMany({
    where,
    orderBy: { name: "asc" }
  });
  return categories;
});

export { index_get as default };
//# sourceMappingURL=index.get8.mjs.map
