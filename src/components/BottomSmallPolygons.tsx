import bottomSmallPolygons from "../assets/images/bottomSmallPolygons.svg";

export const BottomSmallPolygons = () => {
    return (
        <div
            className="z-[150] flex absolute justify-center top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-50">
            <img src={bottomSmallPolygons} alt="bottomSmallPolygons"></img>
        </div>
    )
}