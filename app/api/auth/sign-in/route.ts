import { authenticate } from '@/app/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
        return NextResponse.json(
            { message: "Missing required fields" },
            { status: 400 }
        );
    }
    await authenticate('', body);
    return NextResponse.json({ message: 'Signed out' }, { status: 200 });
}