import {NavBtn} from "./NavBtn";
import {useEffect, useRef, useState} from "react";
import {scroller} from "react-scroll";

export const Navbar = ({handleScrollSection}: { handleScrollSection: (option: number) => void }) => {
    const [btnOption, setBtnOption] = useState<number>(1);
    const ignoreScroll = useRef(false);

    function handleBtnClick(option: number) {
        ignoreScroll.current = true;
        scrollToBlock(option);
        setBtnOption(option);

        setTimeout(() => {
            ignoreScroll.current = false;
        }, 600);
    }

    function scrollToBlock(option: number) {
        const viewpointHeight = window.innerHeight;
        scroller.scrollTo('section' + option, {
            duration: 600,
            smooth: 'easeInOutQuad',
        });
    }

    useEffect(() => {
        const handleScroll = () => {
            if (ignoreScroll.current) return;
            const index = Math.round(window.scrollY / window.innerHeight) + 1;
            setBtnOption(index);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        handleScrollSection(btnOption);
    }, [btnOption]);

    return (
        <div
            className="flex items-center justify-center px-3 py-1 border-solid border-[#515151] border-[1px] rounded-full bg-[#1F1F1F] gap-[10px]">
            <NavBtn text={"Home"} selected={btnOption === 1} handleBtnClickNavbar={handleBtnClick} option={1}/>
            <NavBtn text={"About me"} selected={btnOption === 2} handleBtnClickNavbar={handleBtnClick} option={2}/>
            <NavBtn text={"Projects"} selected={btnOption === 3} handleBtnClickNavbar={handleBtnClick} option={3}/>
            <NavBtn text={"Contact me"} selected={btnOption === 4} handleBtnClickNavbar={handleBtnClick} option={4}/>
        </div>
    )
}