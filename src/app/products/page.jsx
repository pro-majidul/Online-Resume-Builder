"use client"; 

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Loading...</div>;

  return <div>
    <ul className="text-center">
      {data?.map((singleProduct) => {
        return <li key={singleProduct._id}>{singleProduct?.name}</li>
      })}
    </ul>
  </div>;
}
