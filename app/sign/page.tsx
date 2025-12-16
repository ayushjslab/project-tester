"use client";
import { SignInButton } from "authiq";
const page = () => {
  return (
    <SignInButton
      provider="github"
      websiteId="693eaa6fff467a42e8f40324"
      label="sign in"
      redirectUrl="/"
    />
  );
};

export default page;
