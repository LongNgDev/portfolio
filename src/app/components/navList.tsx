import React from "react";
import Link from "next/link";

function NavList() {
	return (
		<div className="flex flex-col gap-2 h-fit">
			<Link href={"#"}>About</Link>
			<Link href={"#"}>Skills</Link>
			<Link href={"#"}>Experience</Link>
			<Link href={"#"}>Projects</Link>
			<Link href={"#"}>Contact me</Link>
		</div>
	);
}

export default NavList;
