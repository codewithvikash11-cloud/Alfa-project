import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json();
    // Mock workflow trigger
    return NextResponse.json({
        jobId: "job_" + Date.now(),
        status: "processing",
        estimatedTime: "2m"
    });
}
