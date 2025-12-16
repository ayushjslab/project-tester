"use client";

import { useValidateUser } from "@/hooks/useValidate";

const Page = () => {
  const { data, loading, error } = useValidateUser();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data?.authenticated) return <div>Not authenticated</div>;

  return (
    <div>
      <h1>Valid user!</h1>
      <p>Name: {data.session.name}</p>
      <p>Email: {data.session.email}</p>
    </div>
  );
};

export default Page;
