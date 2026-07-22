"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface Page {
  _id: string;
  title: string;
  slug: string;
}

export default function Home() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await axios.get(
        "https://renewcred-cms-1.onrender.com/api/public/pages"
      );

      setPages(response.data.pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className="text-center mt-20">Loading...</h1>;
  }

  return (
    <main className="max-w-6xl mx-auto p-10">
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">
          Welcome to RenewCred
        </h1>

        <p className="mt-4 text-gray-500 text-xl">
          A CMS built using Next.js, Express, MongoDB, and JWT Authentication.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">
          Published Pages
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pages.map((page) => (
            <Link key={page._id} href={`/${page.slug}`}>
              <div className="border rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer">
                <h3 className="text-2xl font-bold">
                  {page.title}
                </h3>

                <p className="text-gray-500">
                  Slug: {page.slug}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}