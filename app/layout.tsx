import { UserProvider } from "./contexts/userContext";
import "./globals.scss";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

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
      <body className={robotoCondensed.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
