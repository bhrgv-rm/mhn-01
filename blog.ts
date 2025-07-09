import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Blog {
  title: string;
  slug: string;
  id: string;
  content: string;
}

const contentDir = path.join(process.cwd(), "markdown");

export function getAllBlogs(): Blog[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      console.error(`Directory ${contentDir} does not exist`);
      return [];
    }

    const files = fs.readdirSync(contentDir);
    console.log("Found files:", files); // Debug log

    return files
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .map((fileName) => {
        const filePath = path.join(contentDir, fileName);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContents);

        // Use filename (without extension) as slug
        const slug = fileName.replace(/\.mdx?$/, "");

        console.log("Processing file:", fileName, "with slug:", slug); // Debug log

        return {
          title: data.title || "Untitled",
          slug: slug, // Now using filename as slug
          id: data.id || slug,
          content,
        };
      });
  } catch (error) {
    console.error("Error reading blogs:", error);
    return [];
  }
}

export function getBlogBySlug(slug: string): Blog | undefined {
  const blogs = getAllBlogs();
  console.log(
    "Looking for slug:",
    slug,
    "in blogs:",
    blogs.map((b) => b.slug)
  ); // Debug log
  return blogs.find((blog) => blog.slug === slug);
}
