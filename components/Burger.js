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
                <div className="h-screen w-screen fixed inset-0 bg-purple-400 z-10">
                    <span className="font-bold text-white" onClick={handleOpen}>X</span>
                    <ul className="h-2/3 w-full flex flex-col justify-evenly items-center text-white font-bold text-2xl">
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Mylib</li>
                        <li>Practice</li>
                        <li>Account</li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Burger