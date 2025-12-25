"use client";
import React from "react";
import { useFetchWebsiteUsers } from "authiq";
const page = () => {
  const { users, loading, error } = useFetchWebsiteUsers(
    "694d2890b8afc7c3a1208e42"
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default page;
