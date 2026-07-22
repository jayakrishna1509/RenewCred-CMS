"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/RichTextEditor";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [isPublished, setIsPublished] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "https://renewcred-cms-1.onrender.com/api/pages",
        {
          title,
          slug,
          content,
          isPublished,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Page created successfully!");
      router.push("/dashboard/pages");
    } catch (error) {
      console.log(error);
      alert("Failed to create page.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Add New Page
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-2">Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-2">Slug</label>

          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block mb-2">Content</label>

          <RichTextEditor
            content={content}
            onChange={setContent}
          />
        </div>

        {/* Publish */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
          />

          <label>Published</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save Page
        </button>
      </form>
    </div>
  );
}