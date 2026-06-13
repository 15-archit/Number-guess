
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client/extension'

const prisma = new PrismaClient({
  adapter: new PrismaNeon({
    connectionString: process.env.DATABASE_URL,
  }),
})

export default prisma