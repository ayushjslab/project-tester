"use client";
import { SignInButton } from "authiq";
const page = () => {
  return (
    <SignInButton
      provider="github"
      websiteId="694d2890b8afc7c3a1208e42"
      label="sign in"
      redirectUrl="/"
    />
  );
};

export default page;
