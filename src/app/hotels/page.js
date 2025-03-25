import HotelFilterSidebar from "@/components/HotelFilterSidebar";
import HotelSearchResults from "@/components/HotelSearchResults";
import SearchSummary from "@/components/SearchSummary";
import axios from "axios";
import dayjs from "dayjs";

export default async function HotelsPage({ searchParams }) {
  if (!searchParams) return null;
  const destination = searchParams.destination || "";
  const checkIn = searchParams.checkIn || "";
  const checkOut = searchParams.checkOut || "";
  const guests = searchParams.guests || "";

  if (!destination || !checkIn || !checkOut || !guests) {
    return <p className="text-center mt-10">Missing search parameters</p>;
  }

  const nights = dayjs(checkOut).diff(dayjs(checkIn), "day");

  let hotels = [];
  try {
    const response = await axios.get(
      "https://ota-gin.onrender.com/api/v1/hotels/search",
      {
        params: {
          city_id: destination,
          date: checkIn,
          nights: nights,
          adult_guests: guests,
        },
      }
    );
    hotels = response.data.data || [];
  } catch (error) {
    console.error("Error fetching hotels:", error);
  }

  return (
    <div className="container mx-auto mt-10">
      <SearchSummary
        destination={destination}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
      />

      <div className="flex gap-4 mt-4">
        <HotelFilterSidebar />
        <HotelSearchResults hotels={hotels} />
      </div>
    </div>
  );
}
