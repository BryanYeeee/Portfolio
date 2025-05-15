import "../app/globals.css"
import TransitionWrapper from "../comps/TransitionWrapper"
import { useEffect } from "react";
import { animatePageIn, animatePageOut } from "@/utils/pageTransition";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
    const router = useRouter()


    return (
            <Component {...pageProps} />
    )

}