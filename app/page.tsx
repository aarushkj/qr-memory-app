import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>QR Memory App</h1>
      <p>Scan a QR code to unlock a memory.</p>
      <Link href="/qr">Scan QR Code</Link>
    </main>
  );
}
