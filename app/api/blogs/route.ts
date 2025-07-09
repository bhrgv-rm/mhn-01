import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Blog {
  title: string;
  slug: string;
  content: string;
  description: string;
  date: string;
  image: string;
}

const contentDir = path.join(process.cwd(), "markdown");

function getAllBlogs(): Blog[] {
  try {
    if (!fs.existsSync(contentDir)) {
      console.error(`Directory ${contentDir} does not exist`);
      return [];
    }

    const files = fs.readdirSync(contentDir);

    if (files.length === 0) {
      console.log("No files found in markdown directory");
      return [];
    }

    const blogs = files
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .map((fileName) => {
        try {
          const filePath = path.join(contentDir, fileName);
          const fileContents = fs.readFileSync(filePath, "utf-8");
          const { data, content } = matter(fileContents);

          const slug = fileName.replace(/\.mdx?$/, "");

          return {
            title: data.title || "Untitled",
            slug: slug,
            content,
            description: data.description || "",
            date: data.date || new Date().toISOString().split("T")[0],
            image: `/blog/${slug}.jpg`,
          };
        } catch (fileError) {
          console.error(`Error processing file ${fileName}:`, fileError);
          return null;
        }
      })
      .filter((blog): blog is Blog => blog !== null);

    return blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error("Error reading blogs directory:", error);
    return [];
  }
}

export async function GET() {
  try {
    const blogs = getAllBlogs();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
