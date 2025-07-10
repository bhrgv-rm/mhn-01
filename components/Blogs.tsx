"use client";

import Link from "next/link";
import type React from "react";
import { useBlogs } from "@/hooks/use-blogs";
import { ArrowRightIcon } from "@phosphor-icons/react";

type Blog = {
  title: string;
  slug: string;
  description?: string;
  date: string;
  image?: string;
};

const InnerBlog: React.FC<Blog & { slug: string }> = ({
  title,
  description,
  date,
  image,
  slug,
}) => (
  <Link href={`/blogs/${slug}`} className="block">
    <div className="bg-white rounded-xl shadow-md border flex flex-col items-start max-w-3xl w-full hover:shadow-lg transition-shadow">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl h-80 w-full object-cover"
      />
      <div className="flex flex-col gap-2 border-t items-start p-4 w-full">
        <h2 className="blog-title text-xl font-bold">{title}</h2>
        <p className="blog-desc text-gray-800">{description}</p>
        <p className="text-gray-600 text-xs">
          {new Date(date).toLocaleDateString("en-GB")}
        </p>
      </div>
    </div>
  </Link>
);

const Blogs: React.FC = () => {
  const { blogs, loading, error } = useBlogs();

  if (loading) {
    return (
      <div className="text-center text-black flex items-center justify-center w-[90vw] rounded-xl md:p-16 p-8 mx-auto my-32">
        <div className="text-xl">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-black flex items-center justify-center w-[90vw] rounded-xl md:p-16 p-8 mx-auto my-32">
        <div className="text-xl text-red-600">Error loading blogs: {error}</div>
      </div>
    );
  }

  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="text-center text-black flex md:flex-row flex-col items-start justify-between md:w-[90vw] rounded-xl md:p-16 p-4 md:mx-auto my-32">
      <div className="md:sticky md:top-32 flex flex-1 items-start flex-col pb-4">
        <h1 className="text-4xl md:text-6xl tracking-tighter leading-tighter md:font-bold font-semibold text-start text-balance mb-4">
          Not Just Blogs.
        </h1>
        <p className="text-gray-700 text-start text-balance mb-8">
          Wellness goes beyond diets and workouts—it's how you live, think, and
          recharge. Dive into blogs that inspire simple changes with a big
          impact.
        </p>
        <Link
          href="/blogs"
          className="cta bg-slate-950 text-amber-50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          Explore all Blogs
          <ArrowRightIcon />
        </Link>
      </div>
      <div className="flex flex-col flex-1 gap-8 items-end">
        {latestBlogs.map((blog) => (
          <InnerBlog key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
