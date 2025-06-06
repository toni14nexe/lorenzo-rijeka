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

const getAllCategories = async () => {
  const [portal, jobs, webshop] = await Promise.all([
    prisma.portalCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "asc" }
    }),
    prisma.jobsCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "asc" }
    }),
    prisma.productCategory.findMany({
      where: { deletedAt: null },
      orderBy: { createdAt: "asc" }
    })
  ]);
  return {
    portal,
    jobs,
    webshop
  };
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
const categories_get = defineEventHandler(async (event) => {
  const allCategories = await getAllCategories();
  const portalCategories = buildHierarchy(allCategories.portal);
  return {
    portal: portalCategories,
    jobs: allCategories.jobs,
    webshop: allCategories.webshop
  };
});

export { categories_get as default };
//# sourceMappingURL=categories.get.mjs.map
