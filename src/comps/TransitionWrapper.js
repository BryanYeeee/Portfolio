"use client"
import { useEffect } from "react";
import { animatePageIn } from "@/utils/pageTransition";

const TransitionWrapper = ({ children })  => {

    useEffect(() => {
        animatePageIn();
    }, []);
    
    return (
        <div>
            <div className="translate-y-0 transform banner min-h-screen bg-white z-30 fixed top-0 left-0   w-1/5 " />
            <div className="translate-y-0 transform banner min-h-screen bg-white z-30 fixed top-0 left-1/5 w-1/5 " />
            <div className="translate-y-0 transform banner min-h-screen bg-white z-30 fixed top-0 left-2/5 w-1/5 " />
            <div className="translate-y-0 transform banner min-h-screen bg-white z-30 fixed top-0 left-3/5 w-1/5 " />
            <div className="translate-y-0 transform banner min-h-screen bg-white z-30 fixed top-0 left-4/5 w-1/5 " />
            {children}
        </div>
    );
}
export default TransitionWrapper 


