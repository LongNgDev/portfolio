"use client";

import Typewriter from "typewriter-effect";

function Intro() {
	return (
		<div className="max-w-xl">
			<h2 className="font-sans font-extrabold tracking-wider text-transparent text-[80px] bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 bg-clip-text animate-glow">
				Hello World,
			</h2>

			{/* Type Writting Effect for roles */}
			<h2 className="pt-2 pb-4 text-4xl font-bold">
				<p className="inline text-2xl">I&apos;m a </p>
				<Typewriter
					options={{
						strings: [
							'<span class="text-purple-500">Software Engineer</span>',
							'<span class="text-indigo-500">Full-stack Developer</span>',
							'<span class="text-teal-500">Data Engineer</span>',
							'<span class="text-purple-700">Automation Engineer</span>',
						],
						cursor: "_",
						autoStart: true,
						loop: true,
						delay: 50,
						deleteSpeed: 20,
					}}
				/>
			</h2>

			{/* Short summary about me */}
			<p className="leading-relaxed tracking-wide">
				With experience across <strong>full-stack development</strong>,
				<strong>backend engineering</strong>, and <strong>automation</strong>, I
				enjoy designing clean databases, crafting robust APIs, and turning
				complex ideas into elegant, user-friendly solutions. Currently based in{" "}
				<strong>Melbourne</strong>, I&apos;m passionate about learning,
				problem-solving, and brewing code with coffee ☕.
			</p>
		</div>
	);
}

export default Intro;
