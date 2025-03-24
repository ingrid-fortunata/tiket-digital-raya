import HotelSearchBar from "@/components/HotelSearchBar";

// Fetching city list from API on the server side
async function fetchCities() {
  try {
    const res = await fetch("https://ota-gin.onrender.com/api/v1/cities", {
      cache: "no-store", // Ensure fresh data on every request
    });
    if (!res.ok) {
      throw new Error("Failed to fetch cities");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching cities:", error);
    return []; // Return empty array if fetching fails
  }
}

export default async function Home() {
  const cities = await fetchCities();

  return (
    <main>
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: "url('/HomeBg.png')" }}
      >
        <HotelSearchBar cities={cities?.data} />
      </div>
    </main>
  );
}
