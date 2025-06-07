import supabase from "@/app/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const userInfo = await request.json();

    const { data, error } = await supabase.from("user_info").insert([userInfo]);

    if (error) {
      console.error("Error inserting data into user_info table:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
