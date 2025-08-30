"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type MarqueeProps = {
	src: string | StaticImport;
	alt: string;
};

type SkillSliderProps = {
	items: Array<MarqueeProps>;
	direction?: "left" | "right";
	speed?: number;
};

function SkillSlider({
	items,
	direction = "left",
	speed = 150,
}: SkillSliderProps) {
	return (
		<div className="py-10">
			<Marquee
				autoFill
				pauseOnHover
				direction={direction}
				speed={speed}
				gradient
				gradientColor={"#0a0a0a"} // dark fade
				gradientWidth={150}
			>
				{items.map((item, index) => (
					<div key={index} className="px-10 my-5">
						<Image
							src={item.src}
							alt={item.alt}
							width={128}
							height={128}
							className="transition-all duration-300 opacity-50 hover:opacity-100 hover:-translate-y-4"
						/>
					</div>
				))}
			</Marquee>
		</div>
	);
}

export default SkillSlider;
