"use client"

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/router";
import { animatePageOut } from "@/utils/pageTransition";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const heroRef = useRef(null);
    const tl = useRef()
    const clickAnim = useRef()
    const router = useRouter()

    useGSAP(() => {
        const ctx = gsap.context(() => {
            if (tl.current) tl.current.kill()
            tl.current = gsap.timeline().startTime(1)
                .from(".fname", { x: -1000, xPercent: 0, ease: 'power4.inOut', duration: 2 }, 'a')
                .from(".lname", { x: 1000, ease: 'power4.inOut', duration: 2 }, 'a')
                .to(".fname", { y: -25, ease: 'power4.inOut', duration: 0.1 }, 'a')
                .to(".lname", { y: 25, ease: 'power4.inOut', duration: 0.1 }, 'a')
                .to([".fname", ".lname"], { rotate: 5, ease: 'power4.inOut', duration: 0.25}, "b")
                .to([".fname", ".lname"], { rotate: -5, ease: 'power4.inOut', duration: 0.1 }, "c")
                .to([".fname", ".lname"], { rotate: 0, ease: 'power4.inOut', duration: 0.1 }, "d")
                .to([".fname", ".lname"], { x: "-=20", y: "+=20", ease: 'power4.inOut', duration: 0.2 }, "e")
                .to(".tshadow", { x: "+=20", y: "-=20", ease: 'power4.inOut', duration: 0.2 }, "e");

            clickAnim.current = () => {
                tl.current = gsap.timeline({onComplete: ()=>{animatePageOut('/home', router)}})
                    .to(".tshadow", { top: '-50vh', yPercent: 50, y: 0, x: 0, fontSize: '2rem', ease: 'power4.inOut', duration: 1 }, "a")
                    .to(".back-text", { gap: 2, ease: 'power4.inOut', duration: 1 }, "a")

                for (let i = 0; i < 5; i++) {
                    tl.current.to('.tletter-' + i, {
                        x: 100 * i,
                        y: -100,
                        ease: 'power4.inOut',
                        duration: 1
                    }, "c")
                }
                for (let i = 5; i < 8; i++) {
                    tl.current.to('.tletter-' + i, {
                        scale: 0,
                        duration: 0.35 * (8 - i)
                    }, "c")
                }
            };
        }, heroRef);

        return () => ctx.revert();
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="h-screen w-screen bg-gray-950">
            <div className="name-title absolute h-screen w-screen flex gap-4 justify-center items-center z-2" onClick={() => clickAnim.current?.()}>
                <div className="fname title ftitle">
                    {['B', 'R', 'Y', 'A', 'N'].map((letter, i) => (
                        <span key={i} className={"relative inline-block tletter-" + i}>{letter}</span>
                    ))}
                </div>
                <div className="lname title ftitle">
                    {['Y', 'E', 'E'].map((letter, i) => (
                        <span key={i + 5} className={"relative inline-block tletter-" + (i + 5)}>{letter}</span>
                    ))}
                </div>
            </div>

            <div className="absolute h-screen w-screen flex gap-4 justify-center items-center z-1 back-text">
                <div className="fname tshadow relative">
                    {['B', 'R', 'Y', 'A', 'N'].map((letter, i) => (
                        <span key={i} className="relative inline-block">{letter}</span>
                    ))}
                </div>
                <div className="lname tshadow relative">
                    {['Y', 'E', 'E'].map((letter, i) => (
                        <span key={i} className="relative inline-block">{letter}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;