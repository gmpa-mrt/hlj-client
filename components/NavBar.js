import Image from "next/image";
import {useWindowSize} from "../hooks/useWindowSize";
import exitIcon from "../public/exit.svg";
import logo from "../public/favicon.ico";
import userIcon from "../public/user.svg";
import Burger from "./Burger";

function NavBar() {

    const { windowSize } = useWindowSize()

    return (
        <nav className="w-full p-2 inline-flex justify-between items-center">
            {windowSize.width < 800
                ? <Burger/>
                : <></>
            }
            <Image src={logo} alt="logo"
                   width={50} height={50}/>
            {windowSize.width < 800
                ? <></>
                : (
                    <ul className="inline-flex space-x-10 text-white font-bold">
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Mylib</li>
                        <li>Practice</li>
                    </ul>
                )}
            <ul className="inline-flex space-x-4">
                <li>
                    <Image src={userIcon} alt=""
                           width={25} height={25}/>
                </li>
                <li>
                    <Image src={exitIcon} alt=""
                           width={25} height={25}/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar