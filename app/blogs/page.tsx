"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CalendarBlankIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  useFilteredBlogs,
  type SortOption,
  type Blog,
} from "@/hooks/use-blogs";
import BlogFilters from "@/components/blog-filters";
import Loading from "@/components/Loading";

const BlogPreview = ({ title, description, image, date, slug }: Blog) => {
  return (
    <div className="blog-preview bg-white border flex items-stretch justify-between rounded-xl mt-4 w-full h-48 relative overflow-hidden shadow-md transition-shadow">
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h2 className="blog-title text-xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="blog-desc leading-snug text-gray-600 mt-1">
            {description}
          </p>
        </div>
        <span className="text-gray-600 text-md flex items-center gap-1 mt-2">
          <CalendarBlankIcon /> - {new Date(date).toLocaleDateString("en-GB")}
        </span>
      </div>
      <div className="w-1/3 min-h-[150px] relative border-l">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover rounded-r-xl"
        />
      </div>
      <Link
        href={`/blogs/${slug}`}
        className="absolute w-full h-full top-0 left-0 z-10"
      />
    </div>
  );
};

const Page = () => {
  const blogsRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("date-desc");

  const { blogs, loading, error } = useFilteredBlogs(searchTerm, sortBy);

  const handleScrollToRoles = () => {
    if (blogsRef.current) {
      const offset = 100;
      const top =
        blogsRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <section className="max-w-section-default px-4 pt-32 flex flex-col items-center justify-center">
        <h1 className="heading text-center text-pretty font-bold tracking-tighter">
          The Weekly Notion
        </h1>
        <p className="text-xl mt-4 text-gray-600 text-center text-balance">
          No hype. No pressure. Just meaningful health insights designed for
          real life and focused on calm, consistent, and conscious choices.
        </p>
        <button
          className="cta mt-8 px-4 py-2 rounded-md bg-slate-950 text-white text-lg font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          onClick={handleScrollToRoles}
        >
          Explore Blogs
        </button>
      </section>

      <div
        className="flex flex-col items-center justify-center max-w-section-default px-4 mt-8"
        ref={blogsRef}
      >
        <BlogFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          sortBy={sortBy}
          onSortChange={setSortBy}
          resultsCount={blogs.length}
        />

        {loading && <Loading />}

        {error && (
          <div className="w-full py-8">
            <div className="text-center text-red-600">
              Error loading blogs: {error}
            </div>
          </div>
        )}

        {!loading && !error && blogs.length === 0 && (
          <div className="w-full py-8">
            <div className="text-center text-gray-600">
              {searchTerm
                ? "No blogs found matching your search."
                : "No blogs available."}
            </div>
          </div>
        )}

        {!loading &&
          !error &&
          blogs.map((blog) => <BlogPreview key={blog.slug} {...blog} />)}
      </div>
      <Footer />
    </>
  );
};

export default Page;
