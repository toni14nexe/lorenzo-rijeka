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
  if (!body.contactEmail || !body.name || !body.description || !body.salary || !body.location) {
    throw createError({
      statusCode: 400,
      statusMessage: "Body parameter is missing, this body should include: 'contactEmail', 'name', 'description', 'salary' and 'location'. 'contactNumber' is optional."
    });
  }
  const jobCategory = await prisma.jobsCategory.findUnique({
    where: { id: body.jobCategoryId }
  });
  if (!jobCategory) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid jobCategoryId"
    });
  }
  try {
    const job = await prisma.job.update({
      where: { id: params.id },
      data: {
        name: body.name,
        description: body.description,
        salary: body.salary,
        contactEmail: body.contactEmail,
        contactNumber: body.contactNumber,
        location: body.location,
        jobCategoryId: body.jobCategoryId,
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return job;
  } catch (error) {
    console.error("Error updating job:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to update job"
    });
  }
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
