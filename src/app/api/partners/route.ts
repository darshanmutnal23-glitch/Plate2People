import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";
import { partners } from "@/lib/schema";

const partnerSchema = z.object({
  name: z.string().min(2, "Name is required").max(150),
  email: z.string().email("Invalid email"),
  role: z.string().min(1, "Please select a role"),
  city: z.string().min(2, "City is required").max(100),
  message: z.string().max(2000).optional().default(""),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = partnerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors[0]?.message || "Invalid data" },
        { status: 400 }
      );
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json(
        {
          error:
            "Database is not configured yet. Please add DATABASE_URL in Vercel / .env.local",
        },
        { status: 503 }
      );
    }

    const [row] = await db
      .insert(partners)
      .values(parsed.data)
      .returning({ id: partners.id });

    return NextResponse.json(
      { success: true, id: row.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Partner form error:", error);
    return NextResponse.json(
      { error: "Failed to save your interest. Please try again later." },
      { status: 500 }
    );
  }
}
