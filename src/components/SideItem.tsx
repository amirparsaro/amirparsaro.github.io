type SideItemProps = {
    src: string,
    name: string,
    link: string,
}

export const SideItem = ({src, name, link}: SideItemProps) => {
    return (
        <div
            className="bg-[#111111] rounded-l-xl px-4 py-2 flex items-center justify-between gap-4 text-[#D8D8D8] hover:-translate-x-[95px] cursor-pointer transition"
            style={{boxShadow: "0 4px 6px rgba(0,0,0,0.25)"}}
            onClick={() => window.open(link, "_blank")}
        >
            <img src={src} alt={name} className="w-[40px] h-[40px]"></img>
            <p>{name}</p>
        </div>
    )
}