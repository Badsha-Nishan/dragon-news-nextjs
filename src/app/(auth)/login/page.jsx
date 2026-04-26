"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    console.log(res, error.message);
    if (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center mt-6 py-5 flex-col">
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box space-y-5 w-md border p-4">
          <label className="fieldset-legend font-bold flex justify-center items-center text-2xl">
            Login you account
          </label>

          <div>
            <label className="label mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is Required" })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="label mb-2">Password</label>
            <div className="flex justify-center items-center relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is Required" })}
                className="input w-full"
                placeholder="Type a Password"
              />
              <button
                type="button"
                className="text-xl absolute right-0 btn-neutral btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <p className=" text-sm">
            Don't have an account?{" "}
            <Link href={"/register"} className="text-red-500">
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default LoginPage;
