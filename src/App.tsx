import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';
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
    const [leftPolyStyle, setLeftPolyStyle] = useState("-translate-y-1/2 translate-x-[-275px] sm:translate-x-[-250px] md:translate-x-[-300px] lg:translate-x-[-400px]");
    const [rightPolyStyle, setRightPolyStyle] = useState("-translate-y-1/2 translate-x-[275px] sm:translate-x-[250px] md:translate-x-[300px] lg:translate-x-[400px]");
    const [successAlert, setSuccessAlert] = useState<boolean>(false);
    const thirdSectionRef = useRef<HTMLDivElement>(null);
    const [thirdSectionHeight, setThirdSectionHeight] = useState(0);

    useLayoutEffect(() => {
        if (thirdSectionRef.current) {
            const rect = thirdSectionRef.current.getBoundingClientRect();
            const rectHeight = rect.bottom - rect.top;
            setThirdSectionHeight(rectHeight);
        }
    }, []);

    useEffect(() => {
        if (successAlert) {
            const timer = setTimeout(() => setSuccessAlert(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [successAlert]);

    function handleScrollSection(option: number) {
        if (option === 1) {
            setLeftPolyStyle("-translate-y-1/2 translate-x-[-275px] sm:translate-x-[-250px] md:translate-x-[-300px] lg:translate-x-[-400px]");
            setRightPolyStyle("-translate-y-1/2 translate-x-[275px] sm:translate-x-[250px] md:translate-x-[300px] lg:translate-x-[400px]");
        } else if (option === 2) {
            setLeftPolyStyle("-translate-y-1/2 translate-x-[-100px] md:translate-x-[10px] lg:translate-x-[100px] xl:translate-x-[300px]");
            setRightPolyStyle("-translate-y-1/2 translate-x-[100px] md:translate-x-[-10px] lg:translate-x-[-100px] xl:translate-x-[-300px]");
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

    const descriptionItems = [
        [
            "Contributed daily by implementing new features and fixing recurring bugs across the project.",
            "These contributions became an integral part of the final product, which is actively used by several hundred employees and has been sold to multiple companies.",
            "Built a clean, scalable, and user-friendly UI using advanced React and Next.js patterns.",
            "Applied efficient data structures and optimization techniques to ensure fast performance and smooth user experience."
        ],
        [
            "Built a front-end Single-Page-Application (SPA) for a Speech-to-Text AI project.",
            "Connected to back-end services via RESTful APIs.",
            "Used React features including Hooks, React Router, and Redux for state and navigation management.",
            "Developed modular and reusable components to improve code clarity and maintainability.",
            "Styled the application using Tailwind CSS for fast, consistent UI design."
        ],
        [
            "Built a full-stack email system with complete CRUD operations (Create, Read, Update, Delete).",
            "Developed the back-end using Spring Boot and Spring MVC, exposing RESTful APIs for client interaction.",
            "Designed and implemented the front-end using vanilla JavaScript, HTML, and CSS.",
            "Applied object-oriented programming (OOP) principles to ensure a modular and maintainable codebase.",
            "Used efficient data structures to enhance system performance and scalability."
        ]
    ];

    return (
        <>
            {SuccessPortal}
            <div className="overflow-hidden">
                <div className="z-[200] h-[100px] flex items-center justify-center fixed left-1/2 -translate-x-1/2">
                    <Navbar handleScrollSection={handleScrollSection} thirdSectionHeight={thirdSectionHeight}/>
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
                            <p className="text-[35px] text-[#D7D7D7] sm:text-[50px] md:text-[75px] lg:text-[100px] xl:text[100px] 2xl:text[100px]">AmirParsa
                                Rouhani</p>
                            <p className="text-[20px] text-[#D7D7D7] sm:text-[25px] md:text-[30px] lg:text-[40px] xl:text[400px] 2xl:text[40px]">Software
                                Developer</p>
                        </div>
                    </div>
                    <TopSmallPolygons/>
                </div>

                <div id="section2"
                     className="relative bg-[linear-gradient(to_top,_#111111,_#2D2D2D)] w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
                    <div
                        className="z-[150] glass-div w-[80%] md:w-[65%] lg:w-[50%] flex flex-col justify-center items-center text-[#D7D7D7] gap-12 p-10">
                        <div className="flex flex-col justify-center items-start gap-3">
                            <p className="text-xl md:text-2xl lg:text-3xl">About me</p>
                            <p className="text-center text-xs md:text-sm lg:text-md text-justify">I’m <b>AmirParsa
                                Rouhani</b>, a Computer
                                Science student at Amirkabir University of Technology and a software developer with
                                experience in Python, Java, JavaScript, TypeScript, SQL, and C. I’m passionate about AI,
                                game development, and creating practical, efficient applications. Through internships
                                and hands-on projects, I’ve developed my problem-solving and collaboration skills,
                                delivering real-world solutions in team environments.
                            </p>
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
                     ref={thirdSectionRef}
                     className="relative bg-[linear-gradient(to_bottom,_#111111,_#2D2D2D)] w-screen min-h-screen p-5 flex flex-col justify-center items-center overflow-hidden">
                    <div className="flex justify-center items-center gap-5 items-stretch flex-col lg:flex-row">
                        <ProjectItem title={"Panta"}
                                     description={
                                         descriptionItems[0]
                                     }
                                     link={""}
                                     imgLink={""} imgAlt={""}/>
                        <ProjectItem title={"Ava"}
                                     description={
                                         descriptionItems[1]
                                     }
                                     link={"https://github.com/amirparsaro/ava-front-end"}
                                     imgLink={ava} imgAlt={"ava"}/>
                        <ProjectItem title={"Milou"}
                                     description={
                                         descriptionItems[2]
                                     }
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
                        <p>© {new Date().getFullYear()} AmirParsa Rouhani. Made with ❤️</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
