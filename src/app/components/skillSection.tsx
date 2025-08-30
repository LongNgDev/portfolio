import SkillSlider from "@/app/components/skillSlider";

import githubIcon from "@/assets/github.png";
import CSSIcon from "@/assets/css-3.png";
import HTMLIcon from "@/assets/html.png";
import JSIcon from "@/assets/js.png";
import TSIcon from "@/assets/typescript.png";
import PYIcon from "@/assets/python.png";
import NodejsIcon from "@/assets/nodejs.png";
import ReactIcon from "@/assets/react.png";
import DockerIcon from "@/assets/docker.png";
// import AWSIcon from "@/assets/aws.png";
// import MongoIcon from "@/assets/mongodb.png";

export default function SkillsSection() {
	const devTools = [
		{ src: githubIcon, alt: "GitHub" },
		{ src: NodejsIcon, alt: "Node.js" },
		{ src: ReactIcon, alt: "React" },
		{ src: DockerIcon, alt: "Docker" },
	];

	const languages = [
		{ src: JSIcon, alt: "JavaScript" },
		{ src: TSIcon, alt: "TypeScript" },
		{ src: PYIcon, alt: "Python" },
		{ src: HTMLIcon, alt: "HTML" },
		{ src: CSSIcon, alt: "CSS" },
	];

	/* 	const databases = [
		{ src: MongoIcon, alt: "MongoDB" },
		{ src: AWSIcon, alt: "AWS RDS" },
		{ src: DockerIcon, alt: "Container DB" },
	]; */

	return (
		<section className="h-dvh" id="skill">
			{/* <h2 className="mb-6 text-2xl font-semibold text-center">Skills</h2> */}

			{/* Slider 1 */}
			<SkillSlider items={languages} direction="left" speed={40} />

			{/* Slider 2 */}
			{/* <SkillSlider items={databases} direction="left" speed={35} /> */}

			{/* Slider 3 */}
			<SkillSlider items={devTools} direction="right" speed={30} />
		</section>
	);
}
