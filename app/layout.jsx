import './globals.css';

export const metadata = {
  title: 'When Your With the right people',
  description: 'Scan the QR to watch the memory.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
