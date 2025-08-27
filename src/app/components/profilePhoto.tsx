import Image from "next/image";
import photo from "@/assets/devImage.jpg";

function ProfilePhoto() {
	return (
		<div className="relative overflow-hidden w-full h-[500px] rounded-2xl">
			<Image src={photo} alt="Profile Photo" fill className="object-cover" />
		</div>
	);
}

export default ProfilePhoto;
