import {FaLink} from "react-icons/fa6";
import {JSX} from "react";
import privateImg from "../assets/images/private.png";

type ProjectItemProps = {
    title: string,
    description: string,
    link: string,
    imgLink: string,
    imgAlt: string,
}


export const ProjectItem = ({title, description, link, imgLink, imgAlt}: ProjectItemProps) => {
    return (
        <div
            className="z-[150] flex w-[400px] justify-between items-center rounded-3xl flex-col gap-6 border-solid border-2 border-[#515151] glass-div p-2 hover:scale-105 transition">
            <div className="w-[370px] bg-[#303030] rounded-3xl">
                {imgLink !== "" ? (<img src={imgLink} alt={imgAlt} style={{width: "370px", maxHeight: "208px"}}
                                        className="rounded-2xl"></img>) :
                    <img src={privateImg} alt={"private"} style={{width: "370px", maxHeight: "208px"}}
                         className="rounded-2xl"></img>
                }
            </div>

            <div className="flex flex-col justify-senter items-center text-white gap-3">
                <p>{title}</p>
                <p className="text-center">{description}</p>
                {link !== "" ? (
                    <p
                        onClick={() => window.open(link, "_blank")}
                        className="text-blue-400 hover:text-blue-300 cursor-pointer transition flex items-center gap-1">
                        View on GitHub
                        {<FaLink /> as JSX.Element}
                    </p>
                ) : (<p className="text-gray-400">Private project</p>)}
            </div>
        </div>
    )
}