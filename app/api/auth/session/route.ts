import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  if (session) {
    return NextResponse.json(session, { status: 201 });
  } else {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
}
