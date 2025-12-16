"use client";
import { SignInButton } from "authiq";
const page = () => {
  return (
    <SignInButton
      provider="github"
      websiteId="69413520c2386764e4357ce5"
      label="sign in"
      redirectUrl="/"
    />
  );
};

export default page;
