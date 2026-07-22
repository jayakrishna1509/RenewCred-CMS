"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function PublicPage() {
  const params = useParams();

  const [page, setPage] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      const response = await axios.get(
        `https://renewcred-cms-1.onrender.com/api/public/pages/${params.slug}`
      );

      setPage(response.data.page);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!page) {
    return <h1>Page not found.</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-6">
        {page.title}
      </h1>

      <div className="text-lg whitespace-pre-wrap">
        {page.content}
      </div>

    </div>
  );
}