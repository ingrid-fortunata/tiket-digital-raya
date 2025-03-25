"use client";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function SearchSummary({
  destination,
  checkIn,
  checkOut,
  guests,
}) {
  const router = useRouter();
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
      {/* Search Details */}
      <div className="flex gap-6 text-gray-700">
        {/* Destination */}
        <div>
          <p className="text-sm text-gray-500">Kota/Nama Hotel/ Destinasi</p>
          <p className="font-semibold text-lg">{destination}</p>
        </div>

        {/* Check-in & Check-out Dates */}
        <div className="border-l pl-6">
          <p className="text-sm text-gray-500">Tanggal Menginap</p>
          <p className="font-semibold text-lg">
            {dayjs(checkIn, "YYYY-MM-DD").format("DD MMM")} -{" "}
            {dayjs(checkOut, "YYYY-MM-DD").format("DD MMM YYYY")}
          </p>
        </div>

        {/* Guests & Rooms */}
        <div className="border-l pl-6">
          <p className="text-sm text-gray-500">Jumlah Tamu</p>
          <p className="font-semibold text-lg">{guests} Tamu</p>
        </div>
      </div>

      {/* Change Search Button */}
      <button
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg cursor-pointer"
        style={{ color: "white" }}
        onClick={() => router.push("/")}
      >
        Ubah Pencarian
      </button>
    </div>
  );
}
