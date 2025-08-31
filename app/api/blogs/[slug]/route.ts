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

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	try {
		const { slug } = await params;

		if (!slug) {
			return NextResponse.json({ error: "Slug is required" }, { status: 400 });
		}

		const possiblePaths = [
			path.join(contentDir, `${slug}.md`),
			path.join(contentDir, `${slug}.mdx`),
		];

		let filePath: string | null = null;
		let fileContents: string;

		for (const possiblePath of possiblePaths) {
			if (fs.existsSync(possiblePath)) {
				filePath = possiblePath;
				break;
			}
		}

		if (!filePath) {
			console.log(`Blog not found for slug: ${slug}`);
			return NextResponse.json({ error: "Blog not found" }, { status: 404 });
		}

		try {
			fileContents = fs.readFileSync(filePath, "utf-8");
		} catch (readError) {
			console.error(`Error reading file ${filePath}:`, readError);
			return NextResponse.json({ error: "Error reading blog file" }, { status: 500 });
		}

		const { data, content } = matter(fileContents);

		const blog: Blog = {
			title: data.title || "Untitled",
			slug: slug,
			content,
			description: data.description || "",
			date: data.date || new Date().toISOString().split("T")[0],
			image: `/blog/${slug}.webp`,
		};

		return NextResponse.json(blog);
	} catch (error) {
		console.error("API Error:", error);
		return NextResponse.json({ error: "Internal server error" }, { status: 500 });
	}
}
