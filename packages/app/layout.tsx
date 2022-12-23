// These styles apply to every route in the application
import './styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      abc
      <body>{children}</body>
    </html>
  );
}
