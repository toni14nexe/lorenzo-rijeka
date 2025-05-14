import { PrismaClient, Prisma } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma || new PrismaClient().$extends(withAccelerate())
export const queryMode = Prisma.QueryMode

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
