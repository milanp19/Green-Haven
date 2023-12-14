import { PrismaClient } from "@prisma/client";

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production" || typeof window === "undefined")
  global.prisma = prisma;

export default prisma;
