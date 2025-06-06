import { d as defineEventHandler, a as getQuery, p as prisma, c as createError } from '../../nitro/nitro.mjs';
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

async function getAllDescendantCategoryIds(parentId) {
  const children = await prisma.portalCategory.findMany({
    where: { parentId },
    select: { id: true }
  });
  const childIds = children.map((c) => c.id);
  const descendantIds = await Promise.all(
    childIds.map((childId) => getAllDescendantCategoryIds(childId))
  );
  return [parentId, ...descendantIds.flat()];
}
const index_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const categoryName = String(query.categoryName || "");
  const perPage = Number(query.perPage) || 10;
  const page = Number(query.page) || 1;
  const skip = (page - 1) * perPage;
  const deletedOnly = query.deletedOnly === "true";
  const search = query.search || "";
  if (!categoryName) {
    if (deletedOnly) var where = { deletedAt: { not: null } };
    else where = { deletedAt: null };
    if (search)
      where.title = {
        contains: search,
        mode: "insensitive"
      };
    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: perPage,
        include: { category: true }
      }),
      prisma.news.count({ where })
    ]);
    return { news, total };
  } else {
    const rootCategory = await prisma.portalCategory.findUnique({
      where: { name: categoryName },
      select: { id: true }
    });
    if (!rootCategory)
      throw createError({
        statusCode: 404,
        message: "Category does not exist or it is deleted"
      });
    const categoryIds = await getAllDescendantCategoryIds(rootCategory.id);
    const whereCondition = {
      deletedAt: deletedOnly ? { not: null } : null,
      categoryId: { in: categoryIds }
    };
    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where: whereCondition,
        orderBy: { createdAt: "desc" },
        skip,
        take: perPage,
        include: { category: true }
      }),
      prisma.news.count({ where: whereCondition })
    ]);
    return { news, total };
  }
});

export { index_get as default };
//# sourceMappingURL=index.get7.mjs.map
