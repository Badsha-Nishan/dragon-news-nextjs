"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
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
            <input
              type="password"
              {...register("password", { required: "Password is Required" })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
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
