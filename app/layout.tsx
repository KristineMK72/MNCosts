import "./globals.css";

export const metadata = {
  title: "MNCosts",
  description:
    "Interactive trends dashboard for Minnesota costs, financial pressure, and mental health indicators."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
