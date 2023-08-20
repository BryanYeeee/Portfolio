import React from "react";
import './style.css';

const Title = (props) => {
    let inTitle = props.titleState
    let setInTitle = props.titleSetter

    const handleStart = e => {
        setInTitle(!inTitle);
    }
    //sm:text-" + titleFont + "xl

    return (
        <>
            <div className={"ease-in flex flex-col items-center text-fontcol tracking-widest absolute-center whitespace-nowrap text-8xl xl:text-20xl" +
                (inTitle ? "" : " animate-title")}>  
                BRYAN YEE
                <div className={"text-fontcol text-5xl p-4 tracking-normal hover:tracking-widest duration-500 " + (inTitle ? "opacity-100" : " animate-fadeout")} onClick={handleStart}>
                    ←―― press to start ――→
                </div>
            </div>
        </>
    )
}

export default Title