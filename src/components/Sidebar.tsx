import {SideItem} from "./SideItem";
import githubIcon from "../assets/images/github.png";
import instagramIcon from "../assets/images/instagram.png";
import linkedinIcon from "../assets/images/linkedin.png";


export const Sidebar = () => {
    return (
        <div className="flex flex-col gap-1 overflow-visible">
            <SideItem src={githubIcon} name={"Github"} link={"https://github.com/amirparsaro"} />
            <SideItem src={linkedinIcon} name={"LinkedIn"} link={"https://www.linkedin.com/in/amirparsa-rouhani-7017a6284/"} />
            <SideItem src={instagramIcon} name={"Instagram"} link={"https://www.instagram.com/amparsa0380/"} />
        </div>
    )
}