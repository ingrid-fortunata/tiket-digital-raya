import "antd/dist/reset.css";
import "./globals.css";
import Header from "@/components/Header";
import { HotelProvider } from "@/context/hotelContext";

export const metadata = {
  title: "StayKuy - Hotel Booking",
  description: "Find the best hotels for your stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HotelProvider>{children}</HotelProvider>
      </body>
    </html>
  );
}
