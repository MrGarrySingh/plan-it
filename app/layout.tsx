import "./globals.css";

export const metadata = {
  title: "Meetup Planner",
  description: "Find curated meetups and dates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
