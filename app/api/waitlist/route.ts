import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "waitlist-emails.json");

async function getEmails(): Promise<string[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveEmails(emails: string[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(emails, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email?.trim().toLowerCase();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const emails = await getEmails();

    if (emails.includes(email)) {
      return NextResponse.json({
        message: "You're already on the list!",
        alreadyExists: true,
      });
    }

    emails.push(email);
    await saveEmails(emails);

    return NextResponse.json(
      { message: "Welcome to the COSMIC waitlist!" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
