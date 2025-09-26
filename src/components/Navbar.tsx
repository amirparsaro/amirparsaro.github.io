import {NavBtn} from "./NavBtn";
import {useEffect, useRef, useState} from "react";
import {scroller} from "react-scroll";

export const Navbar = ({handleScrollSection, thirdSectionHeight}: {
    handleScrollSection: (option: number) => void,
    thirdSectionHeight: number
}) => {
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
            const vh = window.innerHeight;
            const scroll = window.scrollY;
            if (0 <= scroll && scroll < vh / 2)
                setBtnOption(1);
            else if (vh / 2 <= scroll && scroll < 1.5 * vh)
                setBtnOption(2);
            else if (1.5 * vh <= scroll && scroll < 2 * vh + thirdSectionHeight * 0.5)
                setBtnOption(3);
            else
                setBtnOption(4);
            if (window.innerWidth <= 1024)
                if (1.5 * vh <= scroll && scroll < 2 * vh + thirdSectionHeight * 0.9)
                    setBtnOption(3);

        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [thirdSectionHeight]);

    useEffect(() => {
        handleScrollSection(btnOption);
    }, [btnOption]);

    return (
        <div
            className="flex items-center justify-center px-3 py-1 border-solid border-[#515151] border-[1px] rounded-full bg-[#1F1F1F] gap-[10px]">
            <NavBtn text={"Home"} selected={btnOption === 1} handleBtnClickNavbar={handleBtnClick} option={1}/>
            <NavBtn text={"About"} selected={btnOption === 2} handleBtnClickNavbar={handleBtnClick} option={2}/>
            <NavBtn text={"Projects"} selected={btnOption === 3} handleBtnClickNavbar={handleBtnClick} option={3}/>
            <NavBtn text={"Contact"} selected={btnOption === 4} handleBtnClickNavbar={handleBtnClick} option={4}/>
        </div>
    )
}