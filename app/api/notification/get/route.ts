import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const notifications = await prisma.notification.findMany({
      where: {
        userId: parseInt(userId, 10),
        read: false,
      },
    });

    return NextResponse.json(
      { message: "Notifications fetched", notifications },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
