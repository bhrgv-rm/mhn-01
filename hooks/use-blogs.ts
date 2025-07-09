"use client";

import { useState, useEffect, useMemo } from "react";

export interface Blog {
  title: string;
  slug: string;
  content: string;
  description: string;
  date: string;
  image: string;
}

export type SortOption = "date-desc" | "date-asc" | "title-asc" | "title-desc";

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchBlogs(retryCount = 0) {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/blogs", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (isMounted) {
          setBlogs(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);

        if (retryCount < 2 && isMounted) {
          setTimeout(() => fetchBlogs(retryCount + 1), 1000 * (retryCount + 1));
        } else if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load blogs");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBlogs();

    return () => {
      isMounted = false;
    };
  }, []);

  return { blogs, loading, error };
}

export function useFilteredBlogs(searchTerm: string, sortBy: SortOption) {
  const { blogs, loading, error } = useBlogs();

  const filteredAndSortedBlogs = useMemo(() => {
    let filtered = blogs;

    // Filter by search term (title and description)
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchLower) ||
          blog.description.toLowerCase().includes(searchLower)
      );
    }

    // Sort blogs
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [blogs, searchTerm, sortBy]);

  return {
    blogs: filteredAndSortedBlogs,
    loading,
    error,
  };
}

export function useBlog(slug: string) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchBlog(retryCount = 0) {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/blogs/${slug}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found");
          }
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (isMounted) {
          setBlog(data);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);

        if (retryCount < 2 && isMounted) {
          setTimeout(() => fetchBlog(retryCount + 1), 1000 * (retryCount + 1));
        } else if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load blog");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchBlog();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { blog, loading, error };
}
