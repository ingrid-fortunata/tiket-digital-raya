"use client";
import { useHotel } from "@/context/hotelContext";
import { Carousel } from "antd";
import { useRouter } from "next/navigation";

export default function HotelSearchResults({ hotels }) {
  const router = useRouter();
  const { setSelectedHotel } = useHotel();
  console.log("hotels", hotels);

  const handleViewHotel = (hotel) => {
    setSelectedHotel(hotel); // Store hotel data
    router.push(`/hotels/${hotel.id}`);
  };

  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold mb-2">Hasil Pencarian</h2>
      <p className="text-sm text-gray-500">{hotels.total} Hotel Ditemukan</p>

      {hotels.data.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white shadow-md p-4 rounded-lg flex gap-4 mt-4"
        >
          {/* Hotel Image Carousel */}
          <div className="w-40 h-32 rounded-lg overflow-hidden">
            <Carousel autoplay dots={false} className="h-full">
              {hotel.images.map((img, index) => (
                <div key={index} className="h-32">
                  <img
                    src={img}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Hotel Info */}
          <div className="flex-1">
            <h3 className="text-lg font-bold">{hotel.name}</h3>
            <p className="text-yellow-500">{"⭐".repeat(hotel.star)}</p>
            <p className="text-gray-500 text-sm">{hotel.address}</p>

            {/* Icons for facilities */}
            <div className="flex gap-2 mt-2">
              {hotel.facilities.map((icon, idx) => (
                <span key={idx} className="text-gray-500">
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Buttons */}
          <div className="flex flex-col justify-between items-end">
            <p className="text-blue-600 font-bold text-lg">
              IDR {hotel.rooms[0].price} /malam
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer"
              style={{ color: "white" }}
              onClick={() => handleViewHotel(hotel)}
            >
              Lihat Hotel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
