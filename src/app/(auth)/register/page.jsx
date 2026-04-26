"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center mt-6 py-5 flex-col">
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box space-y-5 w-md border p-4">
          <label className="fieldset-legend font-bold flex justify-center items-center text-2xl">
            Register an account
          </label>

          <div>
            <label className="label mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is Required" })}
              className="input w-full"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="label mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is Required" })}
              className="input w-full"
              placeholder="Enter your Email"
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
              placeholder="Type a Password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
          <p className=" text-sm">
            Already have an account?{" "}
            <Link href={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
