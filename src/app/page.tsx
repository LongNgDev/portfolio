import Intro from "@/app/components/intro";
import ProfilePhoto from "@/app/components/profilePhoto";
import NavList from "./components/navList";

export default function Home() {
	return (
		<>
			<div id="container" className="px-8 py-20 w-dvw">
				<div className="flex justify-between">
					<div className="flex flex-col gap-10 w-[33%] p-5">
						{/* Intro Section */}
						<Intro />

						{/* Navigation section */}
						<NavList />
					</div>

					{/* Image Section */}
					<div className="flex flex-col items-center w-[66%]">
						<ProfilePhoto />
					</div>
				</div>

				{/* Statistic Section */}
				<div>Statistic</div>
			</div>
		</>
	);
}
