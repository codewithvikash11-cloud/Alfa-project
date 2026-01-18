import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json([
        { id: "proj_1", name: "Acme Corp", domain: "acme.com", monitors: 3 },
        { id: "proj_2", name: "Side Project", domain: "coolapp.io", monitors: 0 }
    ]);
}
