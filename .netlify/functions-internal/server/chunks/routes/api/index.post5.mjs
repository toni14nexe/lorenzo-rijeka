import { d as defineEventHandler, r as readBody, p as prisma } from '../../nitro/nitro.mjs';
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
import 'consola';
import 'unhead/server';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-bundle-renderer/runtime';
import 'vue/server-renderer';

const index_post = defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await readBody(event);
    const news = await prisma.news.create({
      data: {
        title: body.title,
        text: body.text,
        author: body.author,
        images: body.images || [],
        videos: body.videos || [],
        category: {
          connect: {
            id: body.categoryId
          }
        }
      }
    });
    return news;
  }
});

export { index_post as default };
//# sourceMappingURL=index.post5.mjs.map
