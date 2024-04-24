import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CloudTasksClient } from "@google-cloud/tasks";

export const dynamic = "force-dynamic";

const credential = JSON.parse(Buffer.from("test", "base64").toString());

const tasksClient = new CloudTasksClient({
  credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
  },
});

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      status: "success",
    },
    { status: 200 }
  );
}
