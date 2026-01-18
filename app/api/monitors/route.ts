import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: "mon_1", keyword: "seo tools", rank: 3, volume: 12000, trend: "up" },
        { id: "mon_2", keyword: "ai agent", rank: 12, volume: 5400, trend: "stable" }
    ]);
}
