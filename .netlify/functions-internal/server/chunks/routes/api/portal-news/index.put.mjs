import { d as defineEventHandler, c as createError, r as readBody, p as prisma } from '../../../nitro/nitro.mjs';
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

const index_put = defineEventHandler(async (event) => {
  const { params } = event.context;
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID parameter is required"
    });
  }
  const body = await readBody(event);
  const category = await prisma.portalCategory.findUnique({
    where: { id: body.categoryId }
  });
  if (!category) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid categoryId"
    });
  }
  try {
    const news = await prisma.news.update({
      where: { id: params.id },
      data: {
        title: body.title,
        text: body.text,
        author: body.author,
        images: body.images || [],
        videos: body.videos || [],
        categoryId: body.categoryId,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return news;
  } catch (error) {
    console.error("Error updating news:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update news"
    });
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
