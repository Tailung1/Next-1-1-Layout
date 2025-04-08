import React from 'react'


export default async function Contact() {
       const response = await fetch(
       "https://jsonplaceholder.typicode.com/todos" );
        const data = await response.json();
  return (
    <div>
      <h1>This is Contact Page</h1>
      {data.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <h3>{todo.completed}</h3>
        </div>
      ))}
    </div>
  );
}

