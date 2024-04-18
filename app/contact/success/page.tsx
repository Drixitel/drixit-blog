import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        Your message has been sent! I&apos;ll get back to you as soon as I can.
      </p>

      <Link href="/" className="mt-4 underline block">
        Back to home
      </Link>
    </div>
  );
}
