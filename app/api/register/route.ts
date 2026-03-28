import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const entry = {
      ...body,
      registeredAt: new Date().toISOString(),
      id: `reg_${Date.now()}`,
    };

    // Save to file
    const filePath = "/tmp/registrations.json";
    let registrations: any[] = [];

    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, "utf-8");
        registrations = JSON.parse(raw);
      }
    } catch {
      // File doesn't exist or is malformed — start fresh
      registrations = [];
    }

    registrations.push(entry);
    fs.writeFileSync(filePath, JSON.stringify(registrations, null, 2));

    console.log(`[Registration] New entry saved: ${entry.email} at ${entry.registeredAt}`);

    return NextResponse.json({ success: true, id: entry.id }, { status: 200 });
  } catch (error) {
    console.error("[Registration] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save registration" },
      { status: 500 }
    );
  }
}
