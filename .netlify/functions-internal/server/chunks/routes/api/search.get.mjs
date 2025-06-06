import { d as defineEventHandler, a as getQuery, c as createError, p as prisma } from '../../nitro/nitro.mjs';
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

const search_get = defineEventHandler(async (event) => {
  const query = getQuery(event);
  const searchValue = String(query.value || "").trim();
  if (searchValue.length < 3 || searchValue.length > 100)
    throw createError({
      statusCode: 400,
      statusMessage: "Search value should be between 3 and 100 chars."
    });
  const [news, totalNews, jobs, totalJobs, products, totalProducts] = await Promise.all([
    prisma.news.findMany({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [
            { title: { contains: searchValue, mode: "insensitive" } },
            { text: { contains: searchValue, mode: "insensitive" } }
          ]
        }
      },
      include: { category: true },
      orderBy: { createdAt: "desc" }
    }),
    prisma.news.count({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [
            { title: { contains: searchValue, mode: "insensitive" } },
            { text: { contains: searchValue, mode: "insensitive" } }
          ]
        }
      }
    }),
    prisma.job.findMany({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [{ name: { contains: searchValue, mode: "insensitive" } }]
        }
      },
      orderBy: { createdAt: "desc" }
    }),
    prisma.job.count({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [{ name: { contains: searchValue, mode: "insensitive" } }]
        }
      }
    }),
    prisma.product.findMany({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [{ name: { contains: searchValue, mode: "insensitive" } }]
        }
      },
      orderBy: { createdAt: "desc" }
    }),
    prisma.product.count({
      where: {
        deletedAt: null,
        ...searchValue && {
          OR: [{ name: { contains: searchValue, mode: "insensitive" } }]
        }
      }
    })
  ]);
  return { news, totalNews, jobs, totalJobs, products, totalProducts };
});

export { search_get as default };
//# sourceMappingURL=search.get.mjs.map
