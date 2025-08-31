import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IconType } from "react-icons/lib";

function HeroSection() {
	const SOCIAL: Array<{ icon: IconType; path: string }> = [
		{
			icon: FaLinkedinIn,
			path: "https://www.linkedin.com/in/longngdev",
		},
		{
			icon: FaGithub,
			path: "https://github.com/longngdev",
		},
	];

	return (
		<section className="absolute top-0 left-0 flex justify-between w-full px-10 my-10 ">
			<h1 className="text-3xl font-semibold tracking-wide capitalize">
				Long Nguyen
			</h1>
			<div className="flex items-center gap-6 px-10  ">
				{/* Button to download Resume */}
				<button
					className="
						group relative flex items-center justify-end overflow-hidden
						h-10 w-10 hover:w-34
						rounded-full border border-[var(--accent)]
						text-[var(--accent)] hover:bg-[var(--accent)] hover:text-background
						transition-all duration-500 cursor-pointer
					"
				>
					{/* Label slides in from the left, doesn’t affect layout */}
					<span
						className="
							absolute left-0
							-translate-x-[200%] group-hover:translate-x-[50%] :
							transition-transform duration-500
							whitespace-nowrap
						"
					>
						Resume
					</span>

					{/* Icon stays perfectly centred on the right */}
					<div className="flex items-center justify-center w-10 h-10 shrink-0">
						<FiDownload className="text-xl" />
					</div>
				</button>

				{/* Link to Social Media */}
				{SOCIAL.map((item, index) => {
					return (
						<Link
							key={index}
							href={item.path}
							target="_blank"
							className="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer hover:bg-[var(--accent)] hover:text-background hover:cursor-pointer text-[var(--accent)]"
						>
							{React.createElement(item.icon)}
						</Link>
					);
				})}
			</div>
		</section>
	);
}

export default HeroSection;
