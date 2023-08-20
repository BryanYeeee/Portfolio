import React from "react";
import './style.css';

const Main = () => {
    const [isHome, setIsHome] = React.useState(true)

    const handleStart = e => {
        setIsHome(!isHome);
    }
    //sm:text-" + titleFont + "xl

    return (
        <>
            <div className={"ease-in flex flex-col items-center text-fontcol tracking-widest duration-1000" +
                (isHome ? " absolute-center whitespace-nowrap text-8xl xl:text-20xl " : " animate-title absolute-center max-w-min text-5xl xl:text-10xl")}>  
                BRYAN YEE
                <div className={"text-fontcol text-5xl p-4 tracking-normal hover:tracking-widest duration-500 " + (isHome ? "opacity-100" : " animate-fadeout")} onClick={handleStart}>
                    ←―― press to start ――→
                </div>
            </div>
        </>
    )
}

export default Main