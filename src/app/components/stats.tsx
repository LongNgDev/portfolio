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
		<section className="my-15 bg-hacker-bg text-hacker-text">
			<div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto text-center sm:grid-cols-3">
				{stats.map((stat, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-6 transition-all duration-300 ease-in-out rounded-2xl hover:scale-105"
					>
						<h3 className="mt-4 text-3xl font-bold">
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
						</h3>
						<p className="mt-2 text-sm tracking-wider">{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Stats;
