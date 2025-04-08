import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

export const AuthForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Login data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-2">User Auth</h1>
        <h2 className="text-xl font-medium text-gray-800 mb-8">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="richab820@gmail.com"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="•••••••"
              className="w-full px-4 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1F2A64] text-white py-2 rounded-md font-semibold hover:bg-[#152050] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
