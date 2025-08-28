import React from "react";
import Link from "next/link";

function NavList() {
	const navItems = [
		{ name: "Skills", href: "#" },
		{ name: "Experiences", href: "#" },
		{ name: "Projects", href: "#" },
		// { name: "About", href: "#" },
		{ name: "Contact", href: "#" },
	];

	/* hover:text-[#00F5D4]
    hover:border-[#00F5D4]
		 hover:[transform:scale(1.20)] */
	return (
		<div className="flex flex-col h-fit w-fit">
			{navItems.map((item) => {
				return (
					<Link
						className="pt-4 pb-1 pr-1 text-lg font-semibold tracking-normal text-purple-400 transition-all duration-500 ease-in-out origin-left w-fit first:pt-0 hover:underline underline-offset-6 hover:tracking-widest hover:text-[#00F5D4] hover:[transform:scale(1.10)]"
						key={item.name}
						href={item.href}
					>
						&gt; {item.name}
					</Link>
				);
			})}
		</div>
	);
}

export default NavList;
