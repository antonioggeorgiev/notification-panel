import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, res: NextResponse) {
  if (req.method === "PATCH") {
    const body = await req.json();
    const { notificationId } = body;
    if (!notificationId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    try {
      const notification = await prisma.notification.update({
        where: { id: notificationId },
        data: { read: true },
      });

      return NextResponse.json(
        { message: "Notification updated", notification },
        { status: 200 }
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
