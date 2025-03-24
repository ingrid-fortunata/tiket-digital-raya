"use client";

import { Input, Button, DatePicker, Select, message } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

export default function HotelSearchBar({ cities }) {
  const [destination, setDestination] = useState(null);
  const [date, setDate] = useState(null);
  const [guests, setGuests] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    if (!destination || !date || !guests) {
      message.warning("Harap isi semua field sebelum mencari hotel!");
      return;
    }

    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    router.push(
      `/hotels?destination=${destination}&date=${formattedDate}&guests=${guests}`
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
            Pilih Kota/Nama Hotel/ Destinasi
          </p>
          <Select
            showSearch
            placeholder="Pilih nama hotel/destinasi/kota menginap"
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
          <DatePicker
            className="w-full"
            placeholder="Pilih tanggal menginap"
            onChange={(date) => setDate(date)}
          />
        </div>

        {/* Guests and Rooms */}
        <div className="flex flex-col w-full">
          <p className="text-gray-700 font-semibold mb-1">
            Jumlah Tamu dan Kamar
          </p>
          <Input
            type="number"
            placeholder="Masukkan jumlah tamu dan kamar"
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
