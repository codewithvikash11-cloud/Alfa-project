import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        user: {
            id: "usr_123",
            name: "Rahul User",
            email: "rahul@example.com",
            role: "owner"
        }
    });
}
