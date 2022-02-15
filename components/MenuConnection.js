import Image from "next/image";
import BlossomBtn from "./BlossomBtn";
import blossom1 from "../public/blossom_1.svg";
import blossom3 from "../public/blossom_3.svg";
import exit from "../public/cross.svg";

const MenuConnection = ({ menu, setMenu, toggle }) => {

    const handleClick = (e) => setMenu(e.currentTarget.id)

    return (
        <>
            <button className="absolute top-2 left-2"
                    onClick={() => {toggle(); setMenu(null)}}>
                <Image src={exit} alt={""}
                       width={25} height={25}/>
            </button>
            <BlossomBtn id={"login"} img={blossom1} text="Sign in" fn={handleClick}/>
            <BlossomBtn id={"register"} img={blossom3} text="Register" fn={handleClick}/>
        </>
    )
}
export default MenuConnection