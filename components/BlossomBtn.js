import Image from "next/image";
import {useState} from "react";

const BlossomBtn = ({id, img, text, fn}) => {

    const [enter, setEnter] = useState(false)

    return (
        <button id={id} className="h-full w-1/2 hover:bg-pink-300/50 flex flex-col justify-center items-center"
                onClick={fn}
                onMouseEnter={() => setEnter(true)}
                onMouseLeave={() => setEnter(false)}>
            <Image src={img} alt=""
                   width={50} height={50}
                   className={enter ? "animate-spin" : ""}/>
            <span className={enter ? "text-white font-bold text-2xl" : "text-pink-300 font-bold text-2xl"}>
                {text}
            </span>
        </button>
    )
}

export default BlossomBtn