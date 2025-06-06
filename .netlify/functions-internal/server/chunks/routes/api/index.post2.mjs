import { d as defineEventHandler, r as readBody, c as createError, p as prisma } from '../../nitro/nitro.mjs';
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

const index_post = defineEventHandler(async (event) => {
  if (event.req.method === "POST") {
    const body = await readBody(event);
    if (!body.contactEmail || !body.name || !body.description || !body.salary || !body.location) {
      throw createError({
        statusCode: 400,
        statusMessage: "Body parameter is missing, this body should include: 'contactEmail', 'name', 'description', 'salary' and 'location'. 'contactNumber' is optional."
      });
    }
    const job = await prisma.job.create({
      data: {
        name: body.name,
        description: body.description,
        salary: body.salary,
        contactEmail: body.contactEmail,
        contactNumber: body.contactNumber,
        location: body.location,
        jobCategory: {
          connect: {
            id: body.jobCategoryId
          }
        }
      }
    });
    return job;
  }
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
