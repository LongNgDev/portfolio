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
			<div className="flex items-center gap-6 px-10 ">
				<button className="flex items-center gap-2 px-4 py-[6px] uppercase border rounded-full">
					<span className="text-lg">Resume</span>
					<FiDownload className="text-xl" />
				</button>
				{SOCIAL.map((item, index) => {
					return (
						<Link
							key={index}
							href={item.path}
							target="_blank"
							className="flex items-center justify-center w-10 h-10 border rounded-full"
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
