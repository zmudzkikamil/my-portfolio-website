"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

const fetchPets = async () => {
  const response = await fetch("/api/pets");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["pets"],
    queryFn: fetchPets,
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Pet List</h2>
      {/* <ul>
        {data.pets.map((pet: any) => (
          <li key={pet.id}>
            {pet.Name} (Owner: {pet.Owner})
          </li>
        ))}
      </ul> */}
    </div>
  );
}
