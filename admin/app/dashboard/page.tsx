"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { logout } from "../features/auth/authSlice";

export default function Dashboard() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const reduxToken = useAppSelector((state) => state.auth.token);

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    dispatch(logout());

    localStorage.removeItem("token");

    router.push("/");
  };

  const fetchProfile = async () => {
    try {
      const authToken = reduxToken || localStorage.getItem("token");

      const response = await axios.get(
        "https://renewcred-cms-1.onrender.com/api/admin/profile",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      setEmail(response.data.admin.email);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = reduxToken || localStorage.getItem("token");

    if (!authToken) {
      router.push("/");
      return;
    }

    fetchProfile();
  }, [reduxToken]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">
        Welcome to RenewCred CMS Dashboard 🎉
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Logged in as: {email}
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}