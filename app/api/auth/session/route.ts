import { auth } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth();
  if (session) {
    return NextResponse.json(session, { status: 201 });
  } else {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
}
