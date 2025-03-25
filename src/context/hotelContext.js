"use client";
import { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export function HotelProvider({ children }) {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <HotelContext.Provider value={{ selectedHotel, setSelectedHotel }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotel() {
  return useContext(HotelContext);
}
