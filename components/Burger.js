import {useState} from "react";

function Burger() {

    const [open, setOpen] = useState(false);

    // @Todo see animation
    const handleOpen = () => {
        setOpen(!open)
    }

    return (
        <>
            {!open ? (
                <div className="burger-container" onClick={handleOpen}>
                    <>
                        <span className="burger-bun-top"/>
                        <span className="burger-filling"/>
                        <span className="burger-bun-bot"/>
                    </>
                </div>
            ) : (
                <div className="h-screen w-screen absolute inset-0 bg-purple-400 z-10">
                    <span className="font-bold text-white" onClick={handleOpen}>X</span>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Mylib</li>
                        <li>Practice</li>
                    </ul>
                </div>
            )}

            {/*<div className="burger-ring">*/}
            {/*    <svg className="svg-ring">*/}
            {/*        <path className="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4"*/}
            {/*              d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2"/>*/}
            {/*    </svg>*/}
            {/*</div>*/}
        </>
    )
}

export default Burger