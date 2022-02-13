import {useState} from "react";
import BlossomBtn from "./BlossomBtn";
import Image from "next/image";
import Login from "./Login";
import Register from "./Register";
import blossom1 from "../public/blossom_1.svg"
import blossom2 from "../public/blossom_2.svg"
import blossom3 from "../public/blossom_3.svg"
import exit from "../public/cross.svg"

const ModalConnection = ({ toggle, display }) => {
    const [menu, setMenu] = useState(null)

    const handleClick = (e) => setMenu(e.currentTarget.id)


    const menuSelected = () => {
        switch (menu) {
            case 'login':
                return <Login/>
            case 'register':
                return <Register/>
            default:
                return (
                    <>
                        <BlossomBtn id={"login"} img={blossom1} text="Sign in" fn={handleClick}/>
                        <BlossomBtn id={"register"} img={blossom3} text="Register" fn={handleClick}/>
                    </>
                )
        }
    }

    return (
        display ? (
            <div className="w-screen h-screen fixed flex justify-center items-center  bg-black/50 z-40">
                <div
                    className="h-1/2 w-2/3 lg:w-1/2 relative flex flex-col items-center justify-center bg-white rounded md:flex-row">
                    <button className="absolute top-2 left-2"
                            onClick={() => {toggle(); setMenu(null)}}>
                        <Image src={exit} alt={""}
                               width={25} height={25}/>
                    </button>
                    {menuSelected()}
                </div>
            </div>
        ) : <></>
    )
}

export default ModalConnection