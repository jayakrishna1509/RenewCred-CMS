"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Pages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all pages
  const fetchPages = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://renewcred-cms-1.onrender.com/api/pages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);

      setPages(response.data.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete page
  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `https://renewcred-cms-1.onrender.com/api/pages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Page deleted successfully!");

      // Refresh page list
      fetchPages();

    } catch (error) {
      console.log(error);
      alert("Failed to delete page.");
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Pages
      </h1>

      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-black">
            <th className="border p-3">Title</th>
            <th className="border p-3">Slug</th>
            <th className="border p-3">Published</th>
            <th className="border p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pages.map((page: any) => (
            <tr key={page._id}>
              <td className="border p-3">
                {page.title}
              </td>

              <td className="border p-3">
                {page.slug}
              </td>

              <td className="border p-3">
                {page.isPublished ? "Yes" : "No"}
              </td>

              <td className="border p-3">
                <div className="flex gap-2">
                  <Link href={`/dashboard/edit-page/${page._id}`}>
                    <button className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(page._id)}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}