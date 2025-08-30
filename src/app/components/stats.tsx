"use client";

import React from "react";
import CountUp from "react-countup";

function Stats() {
	const stats = [
		{
			value: 6,
			label: "Projects",
		},
		{
			value: 10,
			label: "Languages & Frameworks",
		},
		{
			value: 450,
			label: "Code Commits",
		},
	];

	return (
		<section className="my-16">
			<div className="grid max-w-5xl grid-cols-1 mx-auto text-center sm:grid-cols-3 ">
				{stats.map((stat, index) => (
					<div key={index} className="relative">
						<div className="flex flex-col items-center p-6 transition-transform duration-300 ease-in-out will-change-transform transform-gpu rounded-2xl hover:scale-110">
							<span className="mt-4 text-4xl font-semibold">
								<CountUp
									end={stat.value}
									duration={3}
									suffix={
										stat.label.includes("Projects") ||
										stat.label.includes("Code Commits")
											? "+"
											: ""
									} // to Add "+" prefix for stat
								/>
							</span>
							<p className="mt-2 text-sm ">{stat.label}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Stats;
