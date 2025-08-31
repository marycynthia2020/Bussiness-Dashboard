"use client";
import Link from "next/link";
import SocialIcons from "../molecules/socialIcons";
import Button from "../atoms/Button";
import { SignupFormValues } from "@/types";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<SignupFormValues>();

  const onSubmit = async (data: SignupFormValues) => {
    try {
      const response = await axios.post(
        "https://test.blockfuselabs.com/api/register",

        data
      );
      toast.success("Registration Succesful");
      setTimeout(() => {
        router.push("/login");
      }, 500);
    } catch (error: any) {
      if (error) {
        toast.error(error.response?.data?.errors.email[0]);
      }
    }
  };

  return (
    <div className=" w-full text-lg flex flex-col">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-3">
        Create Your Account
      </h1>

      <form className="text-gray-950" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border h-12 p-2 outline-none rounded-md bg-gray-950 shadow-lg text-white"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Name must be atleast 5 characters",
              },
            })}
          />
          <span className=" text-red-600">
            {errors.name && errors.name.message}
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className="borderh-12 p-2 outline-none rounded-md  bg-gray-600 shadow-lg text-white"
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
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            placeholder="Enter your password "
            className="borderh-12 p-2 outline-none rounded-md  bg-gray-950 shadow-lg text-white"
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
        <div className="flex flex-col gap-2 mb-6  bg-gray-0 60shadow-lg text-white rounded-md">
          <select
            id="team"
            className="outline-none p-2 border rounded-md h-12 bg-gray-600 shadow-lg text-white"
            {...register("team_name", {
              required: "Please select a group to proceed",
            })}
          >
            <option value="">Select a group to belong</option>
            <option value="Elon">Elon</option>
            <option value="Pull Request">Pull Request</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Titans">Titans</option>
            <option value="404">404</option>
          </select>
          <span className=" text-red-600">
            {errors.team_name && errors.team_name.message}
          </span>
        </div>
        <Button text={isSubmitting ? "Processing" : "Sign up"} variant="secondary"  disabled={isSubmitting}/>
      </form>
      <div className="mt-8 flex items-center justify-between flex-col gap-2">
        <p className="text-black text-lg mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-[#008494] font-bold">
            Log in
          </Link>{" "}
        </p>
        <p className="mt-4 text-lg  mb-4 text-center">Or continue with </p>
        <SocialIcons />
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
