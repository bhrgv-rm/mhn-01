import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface Blog {
	title: string;
	slug: string;
	id: string;
	content: string;
	summary?: string;
	date: string;
	image?: string;
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

		const blogs = files
			.filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
			.map((fileName) => {
				const filePath = path.join(contentDir, fileName);
				const fileContents = fs.readFileSync(filePath, "utf-8");
				const { data, content } = matter(fileContents);

				// Use filename (without extension) as slug
				const slug = fileName.replace(/\.mdx?$/, "");

				// Get file stats for date if not provided in frontmatter
				const stats = fs.statSync(filePath);
				const fileDate = stats.mtime.toISOString().split("T")[0];

				return {
					title: data.title || "Untitled",
					slug: slug,
					id: data.id || slug,
					content,
					summary: data.summary || content.slice(0, 150).replace(/[#*`]/g, "") + "...",
					date: data.date || fileDate,
					image: data.image || `/blog/${data.id || slug}.webp`,
				};
			});

		// Sort by date (newest first)
		return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	} catch (error) {
		console.error("Error reading blogs:", error);
		return [];
	}
}

export function getBlogBySlug(slug: string): Blog | undefined {
	const blogs = getAllBlogs();
	return blogs.find((blog) => blog.slug === slug);
}

export function getLatestBlogs(count = 3): Blog[] {
	const blogs = getAllBlogs();
	return blogs.slice(0, count);
}
