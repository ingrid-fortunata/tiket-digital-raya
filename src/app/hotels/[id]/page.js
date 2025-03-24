import { notFound } from "next/navigation";

const hotels = {
  1: {
    name: "Hotel A",
    price: "$100",
    location: "Paris",
    description: "Luxury stay in Paris.",
  },
  2: {
    name: "Hotel B",
    price: "$150",
    location: "London",
    description: "Cozy hotel in London.",
  },
};

export default async function HotelDetail({ params }) {
  const id = params.id; // Ensure `params` is awaited implicitly in an async component
  const hotel = hotels[id];

  if (!hotel) return notFound(); // Handle 404

  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p>{hotel.price} per night</p>
      <p>{hotel.description}</p>
    </div>
  );
}
