import { NextResponse } from "next/server";

export async function POST() {
  try {
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refresh_token ?? "",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({
        access_token: data.access_token,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
