import Link from "next/link";

const hotels = [
  { id: 1, name: "Hotel A", price: "$100", location: "Paris" },
  { id: 2, name: "Hotel B", price: "$150", location: "London" },
];

export default function HotelsList({ searchParams }) {
  const { destination, checkIn, checkOut, guests } = searchParams;

  return (
    <div>
      <h1>Hotels in {destination}</h1>
      <p>
        Check-in: {checkIn}, Check-out: {checkOut}, Guests: {guests}
      </p>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link href={`/hotels/${hotel.id}`}>
              <h2>{hotel.name}</h2>
              <p>{hotel.location}</p>
              <p>{hotel.price} per night</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
