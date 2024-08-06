import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, firstname, lastname } = body;

    if (!email || !password || !firstname || !lastname) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        firstname,
        lastname,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Refined error handling
    if (error instanceof Error) {
      console.error("Error creating user:", error.message);
      return NextResponse.json(
        { message: "Internal server error", error: error.message },
        { status: 500 }
      );
    } else {
      console.error("An unexpected error occurred:", error);
      return NextResponse.json(
        {
          message: "Internal server error",
          error: "An unexpected error occurred",
        },
        { status: 500 }
      );
    }
  } finally {
    await prisma.$disconnect();
  }
}
