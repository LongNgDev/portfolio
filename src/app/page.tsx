import Intro from "@/app/components/intro";
import ProfilePhoto from "@/app/components/profilePhoto";
import NavList from "./components/navList";
import Stats from "./components/stats";
import SkillsSection from "./components/skillSection";
import HeroSection from "./components/heroSection";

export default function Home() {
	return (
		<div className="px-10 mx-auto w-dvw max-w-[1440px] relative">
			{/* Main Section */}
			<div className="flex flex-col items-center justify-center h-dvh">
				{/* Hero section */}
				<HeroSection />

				{/* Website URL list */}

				{/* Intro Section */}
				<section className="w-full my-auto h-fit">
					{/* Intro Page */}
					<div className="flex justify-between gap-10">
						<div className="flex flex-col w-full gap-10">
							{/* Intro Component */}
							<Intro />

							{/* Navigation section */}
							<NavList />
						</div>

						{/* Image Section */}
						<div className="flex flex-col items-center justify-center w-full">
							<ProfilePhoto />
						</div>
					</div>

					{/* Statistic Section */}
					<Stats />
				</section>
			</div>

			{/* Skills Page */}
			<SkillsSection />
		</div>
	);
}
