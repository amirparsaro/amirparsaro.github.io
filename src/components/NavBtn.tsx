type NavBtnProps = {
    text: string,
    selected: boolean,
    handleBtnClickNavbar: (option: number) => void,
    option: number,
}

export const NavBtn = ({text, selected, handleBtnClickNavbar, option} :NavBtnProps) => {
    function handleBtnClick() {
        handleBtnClickNavbar(option);
    }

    return (
        <div onClick={handleBtnClick}
             className={`flex items-center justify-center py-1 px-2 border-solid border-[1px] 
             hover:border-[#515151] rounded-full hover:bg-[#303030] cursor-pointer transition
             duration-200 ${selected ? "border-[#515151] bg-[#303030]" : "border-[rgba(0,0,0,0)]"}`}
        >
            <p className="text-[#D8D8D8] text-xs md:text-sm lg:text-base xl:text-base 2xl:text-base">{text}</p>
        </div>
    )
}