import { PrismaClient } from '@prisma/client'

// Lazily instantiate the Prisma client so that simply importing this module
// (which happens during `next build`) never constructs a client or touches
// DATABASE_URL. The client is only created on first actual query, and all
// reads in the app wrap their queries in try/catch. This lets the site build
// and deploy even before the database is provisioned or DATABASE_URL is set.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function getClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ log: ['error', 'warn'] })
  }
  return globalForPrisma.prisma
}

export const db = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getClient()
    const value = Reflect.get(client, prop, client)
    return typeof value === 'function' ? value.bind(client) : value
  },
}) as PrismaClient
