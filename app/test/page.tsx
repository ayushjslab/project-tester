"use client"
import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
};

const TestPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`https://authiq.vercel.app/external/fetch-all-users?websiteId=69413520c2386764e4357ce5`, {
          method: "GET",
          credentials: "include", 
        });

        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }

        const data = await res.json();
        if (data.success) {
          setUsers(data.data);
        } else {
          setError(data.message || "Failed to fetch users");
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
