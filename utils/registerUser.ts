import { SignupFormValues } from "@/types";
import axios from "axios";

export const registerUser = async (userData: SignupFormValues) => {
  try {
    const response = await axios.post(
      "https://test.blockfuselabs.com/api/register",

      userData
    );

    return response;
  } catch (error:any) {
    return error
  }
};
