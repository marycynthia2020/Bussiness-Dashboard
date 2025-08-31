"use client";
import React from "react";
import Button from "../atoms/Button";
import SocialIcons from "../molecules/socialIcons";
import { useRouter } from "next/navigation";

const LandingCard = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-y-5 items-center">
      <h2 className="text-3xl font-semibold mb-4">Start your Journey</h2>
      <Button
        text="Login"
        variant="secondary"
        handleClick={() => router.push("login")}
      />
      <Button
        text="Sign up"
        variant="default"
        handleClick={() => router.push("/signup")}
      />
      <p className="mt-4 text-lg">Or continue with </p>
      <SocialIcons />
    </div>
  );
};

export default LandingCard;
