import topSmallPolygons from "../assets/images/topSmallPolygons.svg";

export const TopSmallPolygons = () => {
    return (
        <div
            className="z-[150] flex absolute justify-center bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-50">
            <img src={topSmallPolygons} alt="topSmallPolygons"></img>
        </div>
    )
}