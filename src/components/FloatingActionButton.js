import { useEffect, useState } from "react"
import "../styles/FAB.scss"
import Icon from "./Icon"

export default function FloatingActionButton(){
    const [show, setShow] = useState(false)

    useEffect(() => {
        let yPosition = 0;
        document.addEventListener("scroll", function (event){
            let isGoingUp = yPosition > window.scrollY
            let isNotInTop = window.scrollY > 0
            setShow(isGoingUp && isNotInTop)
            yPosition = window.scrollY
        })
    }, [])

    function scrollToTop(){
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (<button
        data-show={show? "" : undefined}
        className="fab"
        type="button"
        onClick={scrollToTop}>
        <Icon name="arrow_upward" />
    </button>)
}