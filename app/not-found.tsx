import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center justify-center h-[50vh] mt-40">
				<img
					src="https://media.tenor.com/WC8oc8aG3xgAAAAj/work-office.gif"
					alt="pudgy-penguins-tenor"
					className="w-64 mb-8"
				/>
				<h1 className="text-4xl font-bold mb-2">404 :)</h1>
				<p className="text-lg text-center">The page you are looking for does not exist.</p>
				<Link
					href="/"
					className="cta mt-4 px-4 py-2 rounded-md bg-slate-950 text-white text-md font-semibold shadow-lg flex items-center justify-center gap-2 cursor-pointer">
					Back to Home
				</Link>
			</div>
			<Footer />
		</div>
	);
};

export default NotFound;
