import React from "react";

function HeroSection() {
	return (
		<div className="flex justify-between w-full py-12">
			<h1 className="text-4xl font-bold uppercase text-cyan-600">
				Long Nguyen <span className="text-purple-600">Dev</span>
			</h1>
			<div>
				<span>LinkedIn</span>
				<span>github</span>
			</div>
		</div>
	);
}

export default HeroSection;
