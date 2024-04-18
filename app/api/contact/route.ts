import { redirect } from "next/navigation";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  const { WEBHOOK_URL } = process.env;

  if (!WEBHOOK_URL) {
    return Response.json({ error: "Webhook URL not set" }, { status: 500 });
  }

  const payload = `New contact form submission:\n\n**Name**: ${name}\n**Email**: ${email})\n\n${message}`;

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: payload }),
    });

    if (response.ok) {
      return Response.redirect(req.url + "?success=true", 303);
    }

    console.error(response);

    return Response.json({ error: "Failed to send message" }, { status: 500 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
