import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(email: string): Promise<User | null> {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  } finally {
    await prisma.$disconnect();
  }
}
