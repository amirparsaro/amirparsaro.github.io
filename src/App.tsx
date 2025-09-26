import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Sidebar} from "./components/Sidebar";
import PolygonBig from "./assets/images/PolygonBig.svg";
import {TopSmallPolygons} from "./components/TopSmallPolygons";
import {BottomSmallPolygons} from "./components/BottomSmallPolygons";
import {ProjectItem} from "./components/ProjectItem";
import ava from "./assets/images/Record.png";
import milou from "./assets/images/milou.png";
import {EmailForm} from "./components/EmailForm";
import {createPortal} from "react-dom";
import {Fade} from "@mui/material";
import Alert from "@mui/material/Alert";

function App() {
    const [leftPolyStyle, setLeftPolyStyle] = useState("top-1/2 -translate-y-1/2 left-0 -translate-x-[400px]");
    const [rightPolyStyle, setRightPolyStyle] = useState("top-1/2 -translate-y-1/2 right-0 -translate-x-[-400px]");
    const [successAlert, setSuccessAlert] = useState<boolean>(false);

    useEffect(() => {
        if (successAlert) {
            const timer = setTimeout(() => setSuccessAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [successAlert]);

    function handleScrollSection(option: number) {
        if (option === 1) {
            setLeftPolyStyle("-translate-y-1/2 translate-x-[-400px]");
            setRightPolyStyle("-translate-y-1/2 translate-x-[400px]");
        } else if (option === 2) {
            setLeftPolyStyle("-translate-y-1/2 translate-x-[300px]");
            setRightPolyStyle("-translate-y-1/2 translate-x-[-300px]");
        } else if (option === 3) {
            setLeftPolyStyle("-translate-y-[100%] -translate-x-1/2");
            setRightPolyStyle("translate-x-1/2");
        } else if (option === 4) {
            setLeftPolyStyle("-translate-x-1/2");
            setRightPolyStyle("translate-x-1/2 -translate-y-[100%]");
        }
    }

    const SuccessPortal = successAlert
        ? createPortal(
            <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[999] w-[40%]">
                <div className="w-full block">
                    <Fade in={successAlert} timeout={500}>
                        <Alert
                            variant="filled"
                            severity="success"
                            onClose={() => setSuccessAlert(false)}
                        >
                            Email has been copied successfully!
                        </Alert>
                    </Fade>
                </div>
            </div>,
            document.body
        )
        : null;


    return (
        <>
            {SuccessPortal}
            <div className="overflow-hidden">
                <div className="z-[200] h-[100px] flex items-center justify-center fixed left-1/2 -translate-x-1/2">
                    <Navbar handleScrollSection={handleScrollSection}/>
                </div>

                <div className="z-[200] fixed right-[-95px] top-1/2 -translate-y-1/2">
                    <Sidebar/>
                </div>

                <div
                    className={`z-[100] fixed ${leftPolyStyle} select-none pointer-events-none transition-transform ease-in-out duration-500 top-1/2 left-0`}>
                    <img src={PolygonBig} alt="leftPolygon" style={{width: '600px', height: '600px', opacity: '0.5'}}/>
                </div>

                <div
                    className={`z-[100] fixed ${rightPolyStyle} select-none pointer-events-none transition-transform ease-in-out duration-500 top-1/2 right-0`}>
                    <img src={PolygonBig} alt="rightPolygon" style={{width: '600px', height: '600px', opacity: 0.5}}/>
                </div>

                <div id="section1"
                     className="relative bg-[linear-gradient(to_bottom,_#111111,_#2D2D2D)] w-screen h-screen flex flex-col justify-between overflow-hidden">
                    <div className="z-[150] h-full w-full flex items-center justify-center">
                        <div className="flex items-center justify-center flex-col">
                            <p className="text-[100px] text-[#D7D7D7]">AmirParsa Rouhani</p>
                            <p className="text-[40px] text-[#D7D7D7]">Software Developer</p>
                        </div>
                    </div>
                    <TopSmallPolygons/>
                </div>

                <div id="section2"
                     className="relative bg-[linear-gradient(to_top,_#111111,_#2D2D2D)] w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                    <div
                        className="z-[150] glass-div w-[50%] h-[60%] flex flex-col justify-center items-center text-[#D7D7D7] gap-12 p-10">
                        <div className="flex flex-col justify-center items-start gap-3">
                            <p className="text-3xl">About me</p>
                            <p className="text-center text-md text-justify">I’m <b>AmirParsa Rouhani</b>, a Computer
                                Science
                                student at Amirkabir University of Technology and a software developer with experience
                                in
                                Python, Java, JavaScript, TypeScript, SQL, and C. I’m passionate about AI, game
                                development,
                                and creating practical, efficient applications. Through internships and hands-on
                                projects,
                                I’ve developed my problem-solving and collaboration skills, delivering real-world
                                solutions
                                in team environments.</p>
                        </div>
                        <a
                            className="flex items-center justify-center cursor-pointer p-4 text-lg bg-[#111111] rounded-2xl hover:bg-[#1c1c1c] hover:scale-110 transition"
                            download
                            href="/files/AmirParsa_Rouhani_Resume.pdf"
                        >
                            Download CV
                        </a>
                    </div>
                    <BottomSmallPolygons/>
                </div>

                <div id="section3"
                     className="relative bg-[linear-gradient(to_bottom,_#111111,_#2D2D2D)] w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                    <div className="flex justify-center items-center gap-5">
                        <ProjectItem title={"Panta"}
                                     description={"Gained experience through internships and hands-on projects,\n" +
                                         "                            improving both technical skills and project work. I have strong problem-solving skills and\n" +
                                         "                            team collaboration."}
                                     link={""}
                                     imgLink={""} imgAlt={""}/>
                        <ProjectItem title={"Ava"}
                                     description={"Gained experience through internships and hands-on projects,\n" +
                                         "                            improving both technical skills and project work. I have strong problem-solving skills and\n" +
                                         "                            team collaboration."}
                                     link={"https://github.com/amirparsaro/ava-front-end"}
                                     imgLink={ava} imgAlt={"ava"}/>
                        <ProjectItem title={"Milou"}
                                     description={"Gained experience through internships and hands-on projects,\n" +
                                         "                            improving both technical skills and project work. I have strong problem-solving skills and\n" +
                                         "                            team collaboration."}
                                     link={"https://github.com/amirparsaro/milou-web"}
                                     imgLink={milou} imgAlt={"milou"}/>
                    </div>
                </div>

                <div id="section4"
                     className="relative bg-[linear-gradient(to_top,_#111111,_#2D2D2D)] w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                    <EmailForm/>
                    <div
                        className="z-[150] absolute bottom-0 w-full h-[10%] bg-[#090909]/70 text-[#D7D7D7] flex flex-col justify-center items-center overflow-hidden"
                        style={{
                            backdropFilter: "blur(4.1px)",
                            WebkitBackdropFilter: "blur(4.1px)",
                        }}
                    >
                        <p onClick={() => {
                            navigator.clipboard.writeText("amirparsarouhani@gmail.com")
                            setSuccessAlert(true);
                        }}
                           className="cursor-pointer">Contact: amirparsarouhani@gmail.com</p>
                        <p>© 2025 AmirParsa Rouhani. Made with ❤️</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
