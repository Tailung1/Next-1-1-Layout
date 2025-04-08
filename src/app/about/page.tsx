"use client";

import React, { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1 className='bg-green-600'>This is About Page</h1>
      <div>
        {" "}
        {data.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <h3>{todo.completed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
