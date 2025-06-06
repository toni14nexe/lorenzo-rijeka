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

const getAllCategories = async (deletedOnly, search) => {
  if (deletedOnly) var where = { deletedAt: { not: null } };
  else where = { deletedAt: null };
  if (search)
    where.name = {
      contains: search,
      mode: "insensitive"
    };
  return await prisma.portalCategory.findMany({
    where,
    orderBy: { name: "asc" },
    include: { parent: true }
  });
};
const buildHierarchy = (categories) => {
  const categoryMap = /* @__PURE__ */ new Map();
  const rootCategories = [];
  categories.forEach((category) => {
    categoryMap.set(category.id, { ...category, children: [] });
  });
  categories.forEach((category) => {
    if (category.parentId) {
      const parentCategory = categoryMap.get(category.parentId);
      if (parentCategory)
        parentCategory.children.push(categoryMap.get(category.id));
    } else rootCategories.push(categoryMap.get(category.id));
  });
  return rootCategories;
};
const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const deletedOnly = query.deletedOnly === "true";
  const withoutHierarchy = query.withoutHierarchy === "true";
  const search = query.search || "";
  let portalCategories = void 0;
  if (deletedOnly)
    portalCategories = await getAllCategories(deletedOnly, search);
  else {
    if (withoutHierarchy)
      portalCategories = await getAllCategories(deletedOnly, search);
    else {
      const categories = await getAllCategories(deletedOnly, search);
      if (withoutHierarchy) portalCategories = buildHierarchy(categories);
    }
  }
  return portalCategories;
});

export { index_get as default };
//# sourceMappingURL=index.get6.mjs.map
