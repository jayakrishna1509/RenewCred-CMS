"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppDispatch } from "./store/hooks";
import { login } from "./features/auth/authSlice";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  console.log(email);
  console.log(password);

  try {
    const response = await axios.post(
      "https://renewcred-cms-1.onrender.com/api/admin/login",
      {
        email,
        password,
      }
    );

    console.log(response.data);
    // Save JWT token
    localStorage.setItem("token", response.data.token);
    // Save token in Redux
dispatch(login(response.data.token));
    // Redirect to Dashboard
    router.push("/dashboard");

  } catch (error: any) {
    console.log(error.response.data);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          RenewCred CMS
        </h1>

        <form onSubmit={handleLogin}>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>

            <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>

           <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}