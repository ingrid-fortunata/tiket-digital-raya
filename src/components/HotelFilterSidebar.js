"use client";
import { Checkbox, Slider, Collapse } from "antd";
import { useState } from "react";

export default function HotelFilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 999999999]);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-64">
      <h2 className="text-lg font-semibold mb-4">Filter Pencarian</h2>

      <Collapse defaultActiveKey={["1", "2", "3"]} ghost>
        {/* ⭐ Star Rating Filter */}
        <Collapse.Panel header="Bintang Hotel" key="1">
          <Checkbox.Group className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Checkbox key={star} value={star}>
                {"⭐".repeat(star)}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Collapse.Panel>

        {/* 🏊 Facilities Filter */}
        <Collapse.Panel header="Fasilitas" key="2">
          <Checkbox.Group className="flex flex-col gap-2">
            {[
              "Kolam Renang",
              "Parkir Gratis",
              "Pusat Kebugaran",
              "SPA",
              "Mesin Cuci",
            ].map((facility) => (
              <Checkbox key={facility} value={facility}>
                {facility}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Collapse.Panel>

        {/* 💰 Price Filter */}
        <Collapse.Panel header="Harga" key="3">
          <Slider
            range
            min={0}
            max={999999999}
            value={priceRange}
            onChange={setPriceRange}
          />
          <p className="text-sm mt-1">
            IDR {priceRange[0].toLocaleString()} - IDR{" "}
            {priceRange[1].toLocaleString()}
          </p>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
