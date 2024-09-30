import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Fetch all pets from the Pets table
    const pets = await sql`SELECT * FROM Pets;`;

    // Return the pets as a JSON response
    return NextResponse.json({ pets }, { status: 200 });
  } catch (error) {
    console.error("Error fetching pets:", error);
    return NextResponse.json(
      { error: "Failed to fetch pets" },
      { status: 500 },
    );
  }
}
