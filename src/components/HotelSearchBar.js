"use client";

import { Input, Button, DatePicker, Select, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const { RangePicker } = DatePicker;

export default function HotelSearchBar({ cities }) {
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    if (!destination || !date?.[0] || !date?.[1] || !guests) {
      message.warning("Harap isi semua field sebelum mencari hotel!");
      return;
    }

    const checkInDate = dayjs(date[0]).format("YYYY-MM-DD");
    const checkOutDate = dayjs(date[1]).format("YYYY-MM-DD");

    router.push(
      `/hotels?destination=${destination}&checkIn=${checkInDate}&checkOut=${checkOutDate}&guests=${guests}`
    );
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* Heading */}
      <h1 className="text-white text-2xl md:text-3xl font-bold text-center z-10 mt-16">
        Staycation menjadi lebih mudah hanya dengan satu klik <br /> dan
        dapatkan banyak promo menarik!
      </h1>

      {/* Search Bar */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md grid grid-cols-4 gap-6">
        {/* Destination Input */}
        <div className="flex flex-col w-full">
          <p className="text-gray-700 font-semibold mb-1">
            Pilih Kota Destinasi
          </p>
          <Select
            showSearch
            placeholder="Pilih nama destinasi/kota menginap"
            value={destination || null}
            onChange={(value) => setDestination(value)}
            filterOption={(input, option) =>
              option.label.toLowerCase().includes(input.toLowerCase())
            }
            options={cities.map((city) => ({
              value: city.id,
              label: city.name,
            }))}
          />
        </div>

        {/* Date Picker */}
        <div className="flex flex-col w-full">
          <p className="text-gray-700 font-semibold mb-1">Tanggal Menginap</p>
          <RangePicker
            className="w-full"
            placeholder={["Check-in", "Check-out"]}
            onChange={(dates) => setDate(dates)}
            format="YYYY-MM-DD" // Ensures correct date format
          />
        </div>

        {/* Guests and Rooms */}
        <div className="flex flex-col w-full">
          <p className="text-gray-700 font-semibold mb-1">Jumlah Tamu</p>
          <Input
            type="number"
            placeholder="Masukkan jumlah tamu"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            min={1}
          />
        </div>

        {/* Search Button */}
        <div className="flex w-full items-end">
          <Button
            type="primary"
            className="bg-blue-500 hover:bg-blue-600 w-full"
            onClick={handleSearch}
          >
            Cari Hotel
          </Button>
        </div>
      </div>

      {/* Last Search Button */}
      <div className="mt-10 flex w-[65%] justify-items-start">
        <Button className="text-white bg-blue-700 hover:bg-blue-800">
          Lihat Pencarian Terakhir-mu <DownOutlined />
        </Button>
      </div>
    </div>
  );
}
