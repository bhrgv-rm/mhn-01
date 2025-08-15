import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
	const pages = [
		"",
		"about-us",
		"app",
		"blogs",
		"careers",
		"eula",
		"faqs",
		"features",
		"privacy-policy",
		"terms-and-conditions",
	];

	const blogSlugs = [
		"bone-health-blueprint",
		"decoding-metabolism",
		"gut-health-magic",
		"maintaining-vitamin-d-and-the-impact-of-modern-lifestyles",
		"rice-unraveled",
		"the-importance-of-sleep-for-health",
	];

	const now = new Date();

	const sitemapEntries = [
		...pages.map((path, idx) => ({
			url: `${BASE_URL}${path ? `/${path}` : ""}`,
			lastModified: now,
			changeFrequency:
				path === ""
					? "yearly"
					: path === "about-us"
					? "monthly"
					: ("weekly" as "yearly" | "monthly" | "weekly"),
			priority:
				path === ""
					? 1
					: ["about-us", "app", "blogs", "careers", "faqs", "features"].includes(path)
					? 0.8
					: 0.4,
		})),
		...blogSlugs.map((slug) => ({
			url: `${BASE_URL}/blogs/${slug}`,
			lastModified: now,
			changeFrequency: "weekly" as "weekly",
			priority: 0.6,
		})),
	];

	return sitemapEntries;
}
