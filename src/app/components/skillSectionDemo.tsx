import React from "react";

function SkillSectionDemo() {
	const TOP_CATEGORIES: Array<{ category: string; skills: string[] }> = [
		{
			category: "Programming & Languages",
			skills: ["JavaScript", "TypeScript", "SQL", "NoSQL", "Python", "Java"],
		},
		{
			category: "Frontend Development",
			skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
		},
		{
			category: "Backend & Databases",
			skills: [
				"Node.js",
				"Express.js",
				"MySQL",
				"REST APIs",
				"MongoDB",
				"Selenium",
			],
		},
	];

	const BOT_CATEGORIES: Array<{ category: string; skills: string[] }> = [
		{
			category: "Cloud & DevOps",
			skills: ["AWS (S3, EC2, Lambda)", "PM2", "Docker", "Nginx", "CI/CD"],
		},

		{
			category: "Workflow & Practices",
			skills: ["Git/GitHub", "Agile/Scrum", "Debugging", "Collaboration"],
		},
	];

	return (
		<section className="h-dvh relative">
			<h2 className="uppercase absolute text-3xl  w-full font-semibold text-center top-30 tracking-wide">
				Skill
			</h2>
			<div className="flex flex-col justify-center h-full m-auto items-center gap-35 text-lg">
				{/* 3 strong tech categories */}
				<div className="grid grid-cols-3 gap-20 place-items-center">
					{TOP_CATEGORIES.map((item, index) => {
						return (
							<div
								key={index}
								className=" border-1 rounded-xl w-full h-full text-center"
							>
								<h3 className="border-b-1 py-4">{item.category}</h3>
								<div className=" flex gap-8 p-6 w-full flex-wrap flex-grow">
									{item.skills.map((skill, index) => {
										return (
											<div key={index} className="border px-4 py-2 rounded-xl">
												{skill}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>

				<div className="grid grid-cols-2 w-2/3 gap-20 place-items-center">
					{BOT_CATEGORIES.map((item, index) => {
						return (
							<div
								key={index}
								className=" border-1 rounded-xl w-full h-full text-center"
							>
								<h3 className="border-b-1 py-4">{item.category}</h3>
								<div className=" flex gap-8 p-6 w-full flex-wrap flex-grow">
									{item.skills.map((skill, index) => {
										return (
											<div key={index} className="border px-4 py-2 rounded-xl">
												{skill}
											</div>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default SkillSectionDemo;
