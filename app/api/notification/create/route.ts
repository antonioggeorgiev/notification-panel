import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    const body = await req.json();
    const { userId, type, message } = body;
    if (!userId || !type || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    try {
      const notification = await prisma.notification.create({
        data: {
          userId: parseInt(userId, 10),
          type,
          message,
        },
      });

      return NextResponse.json(
        { message: "Notification created", notification },
        { status: 201 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: `Method ${req.method} not allowed` },
      { status: 405 }
    );
  }
}
