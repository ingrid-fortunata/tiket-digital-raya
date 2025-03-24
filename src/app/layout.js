import "antd/dist/reset.css";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "StayKuy - Hotel Booking",
  description: "Find the best hotels for your stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
