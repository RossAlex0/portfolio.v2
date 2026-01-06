import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const res = await fetch(process.env.URL_SERVER!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.TOKEN_SERVER!,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
