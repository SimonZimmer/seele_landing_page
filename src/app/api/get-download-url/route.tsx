import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const filename = url.searchParams.get("filename");

    console.log("Filename = ", filename)

    if (!filename) {
      return NextResponse.json({ error: "Filename is required" }, { status: 400 });
    }

    const token = process.env.DOWNLOAD_READ_WRITE_TOKEN;
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const response = await list({ token });

    if (!response.blobs) {
      return NextResponse.json({ error: "Failed to fetch blobs" }, { status: 500 });
    }

    const file = response.blobs.find((b) => b.pathname === filename);

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return NextResponse.json({ url: file.downloadUrl });
  } catch (error) {
    console.error("Error fetching blob:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
