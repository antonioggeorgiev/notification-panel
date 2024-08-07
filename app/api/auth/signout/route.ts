import { auth, signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    signOut({ 'redirect': false });
    const session = await auth();

    if (session) {
      return NextResponse.json({ message: "Signed out" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "No active session" },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error("Sign out error:", error.message);
      return NextResponse.json(
        { message: "Failed to sign out", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("An unexpected error occurred:", error);
      return NextResponse.json(
        {
          message: "Failed to sign out",
          error: "An unexpected error occurred",
        },
        { status: 500 }
      );
    }
  }
}
