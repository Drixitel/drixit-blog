"use server";

import { redirect } from "next/navigation";

export async function submitForm(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    redirect("/error");
  }

  const payload = `New contact form submission:\n\n**Name**: ${name}\n**Email**: ${email})\n\n**Message**: ${message}`;

  const error = await doNotify(payload);

  if (error) {
    console.error(error);
    redirect("/error");
  }

  redirect("/contact/success");
}

async function doNotify(payload: string): Promise<string | undefined> {
  const { WEBHOOK_URL } = process.env;

  if (!WEBHOOK_URL) {
    return "Webhook URL not set";
  }

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: payload }),
    });

    if (response.ok) {
      return;
    }

    return "Failed to send message: " + response.statusText;
  } catch (error) {
    return JSON.stringify(error);
  }
}
