"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { useBlog } from "@/hooks/use-blogs";
import { useParams } from "next/navigation";
import MarkdownRenderer from "@/components/markdown-renderer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowLeftIcon } from "@phosphor-icons/react";

export default function BlogPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { blog, loading, error } = useBlog(slug);

  if (loading) {
    return (
      <main className="mx-auto p-6 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-6 w-1/3"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto p-6 max-w-4xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error Loading Blog
          </h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </main>
    );
  }

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-20 p-4 max-w-4xl">
        <article>
          <header className="mb-8">
            <a
              href="/blogs"
              className="flex items-center gap-2 w-fit mb-2 justify-center"
            >
              <ArrowLeftIcon /> back to Blogs
            </a>
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              width={800}
              height={400}
              className="rounded-xl shadow-md my-6 w-full"
            />
          </header>
          <MarkdownRenderer content={blog.content} />
        </article>
        <p className="text-gray-600 mb-6">
          Published on - {new Date(blog.date).toLocaleDateString("en-GB")}
        </p>
      </main>
      <Footer />
    </>
  );
}
