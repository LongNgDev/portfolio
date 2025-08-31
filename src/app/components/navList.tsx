import React from "react";
import Link from "next/link";

function NavList() {
	const navItems = [
		{ name: "Skills", href: "#skill" },
		{ name: "Experiences", href: "#" },
		{ name: "Projects", href: "#" },
		// { name: "About", href: "#" },
		{ name: "Contact", href: "#" },
	];

	/* hover:text-[#00F5D4]
    hover:border-[#00F5D4]
		 hover:[transform:scale(1.20)] */
	return (
		<div className="flex flex-col w-fit h-fit">
			{navItems.map((item) => (
				<Link
					key={item.name}
					href={item.href}
					className="group inline-block first:pt-0 pt-4 pb-1 pr-1 text-xl font-semibold tracking-tight text-purple-400
                 transition-colors duration-300 ease-out hover:text-[var(--accent)]"
				>
					<div className="w-fit">
						<span className="inline-block transition-transform duration-300 ease-out origin-left will-change-transform transform-gpu group-hover:translate-x-1 group-hover:scale-105">
							&gt; {item.name}
						</span>

						{/* underline that grows with text */}
						<span
							className="block h-[2px] w-0 bg-current
						transition-[width] duration-300 ease-out
						group-hover:w-[110%]"
						/>
					</div>
				</Link>
			))}
		</div>
	);
}

export default NavList;
