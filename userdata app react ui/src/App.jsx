
import React, { useEffect, useState } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="card">
      <h2>User Profile</h2>
      <p className="info"><b>Name:</b> {user.name}</p>
      <p className="info"><b>Email:</b> {user.email}</p>
      <p className="info"><b>Phone:</b> {user.phone}</p>
    </div>
  );
}

export default function App() {
  return <UserData />;
}
