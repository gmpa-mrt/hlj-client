import Image from "next/image";
import {fetchJson} from "../lib/api";
import backImg from "../public/back.svg"

function LayoutForm({ back, submit, children }) {
    return (
        <>
            <button onClick={back} className="absolute top-2 left-2">
                <Image src={backImg} alt={""}
                       width={25} height={25}/>
            </button>
            <form className="h-full w-full flex flex-col justify-center items-center bg-pink-300/50"
                  onSubmit={submit}>
                {children}
            </form>
        </>
    )
}

export default LayoutForm