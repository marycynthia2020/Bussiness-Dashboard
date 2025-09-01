"use client";
import React, { useEffect, useState } from "react";
import SocialIcons from "../molecules/socialIcons";
import Link from "next/link";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "@/types";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const LoginForm = () => {
  const [userDetails, setUserDetails] = useState();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedItem = localStorage.getItem("user");
      if (storedItem ) {
        try{
          setUserDetails(JSON.parse(storedItem));
        }catch{
          localStorage.removeItem("user")
        }
      }
    }
  }, []);

  useEffect(() => {
    if (userDetails){
      localStorage.setItem("user", JSON.stringify(userDetails));
    }
  }, [userDetails]);

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const response = await axios.post(
        "https://test.blockfuselabs.com/api/login",

        data
      );

      setUserDetails(response.data);
      toast.success("Log in Succesful");
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    } catch (error: any) {
      if (error) {
        toast(error.response?.data?.message);
      }
    }
  };

  return (
    <div className=" w-full text-lg flex flex-col">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-3">
        Log in to continue
      </h1>
      <form className="text-gray-950" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="borderh-12 p-2 outline-none rounded-md  bg-gray-950 shadow-lg text-white"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email address",
              },
            })}
          />
          <span className=" text-red-600">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter your password "
            className="borderh-12 p-2 outline-none rounded-md  bg-gray-600 shadow-lg text-white"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
          />
          <span className=" text-red-600">
            {errors.password && errors.password.message}
          </span>
        </div>
        <Button
          text={isSubmitting ? "Processing" : "Log in"}
          variant="secondary"
          disabled={isSubmitting}
        />
      </form>
      <div className="mt-8 flex items-center justify-between flex-col gap-2">
        <p className="text-black text-lg mt-2">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[#008494] font-bold">
            Sign up
          </Link>{" "}
        </p>
        <p className="mt-4 text-lg  mb-4 text-center">Or continue with </p>
        <SocialIcons />
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
