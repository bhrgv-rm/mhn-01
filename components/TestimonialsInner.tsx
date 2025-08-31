import React from "react";
interface Props {
	name: string;
	tag: string;
	text: string;
	image: string;
}

const Testimonials: React.FC<Props> = ({ name, tag, text, image }) => {
	return (
		<div className="flex flex-col items-center justify-center text-center md:p-6 p-1 md:max-w-240 max-w-screen">
			<h1 className="font-semibold tracking-tight leading-[1.3] md:text-2xl text-xs">{text}</h1>
			<div className="flex items-center mt-4">
				<img
					src={image}
					alt={name}
					loading="lazy"
					className="testimonials-image w-12 h-12 rounded-full mr-4"
				/>
				<div className="flex flex-col items-start ">
					<h2 className="md:text-lg text-md font-semibold leading-5">{name}</h2>
					<p className="md:text-sm text-xs text-gray-500 leading-5">{tag}</p>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
