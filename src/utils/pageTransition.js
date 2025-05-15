"use client"
import { gsap } from "gsap";

export const animatePageIn = () => {
    const banners = document.querySelectorAll(".banner")

    if (banners.length === 0) return;
    gsap.set(banners, { yPercent: 0 });
    requestAnimationFrame(() => {
        gsap.to(banners, {
            yPercent: 100,
            ease: 'power4.inOut',
            stagger: 0.2,
            duration: 1,
        });
    });
}

export const animatePageOut = (href, router) => {
    const banners = document.querySelectorAll(".banner")

    if (banners.length === 0) return;
    requestAnimationFrame(() => {
        gsap.fromTo(banners, { yPercent: 100 }, {
            yPercent: 0, ease: 'power4.inOut', stagger: 0.2,
            onComplete: () => {
                router.push(href)
            }
        })
    });
}