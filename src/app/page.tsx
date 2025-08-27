import Intro from "@/app/components/intro";
import ProfilePhoto from "@/app/components/profilePhoto";
import NavList from "./components/navList";

export default function Home() {
	return (
		<>
			<div id="container" className="px-10 pt-50 mx-auto w-dvw max-w-[1440px]">
				<div className="flex justify-between gap-10">
					<div className="flex flex-col w-full gap-10">
						{/* Intro Section */}
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
				<div>Statistic</div>
			</div>
		</>
	);
}
