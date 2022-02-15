import {useState} from "react";
import Login from "./Login";
import MenuConnection from "./MenuConnection";
import Register from "./Register";


const ModalConnection = ({ toggle, display }) => {
    const [menu, setMenu] = useState(null)

    const menuSelected = () => {
        switch (menu) {
            case 'login':
                return <Login back={() => setMenu(null)} fn={toggle}/>
            case 'register':
                return <Register back={() => setMenu(null)} fn={toggle}/>
            default:
                return <MenuConnection menu={menu} setMenu={setMenu} toggle={toggle}/>
        }
    }

    return (
        display ? (
            <div className="w-screen h-screen fixed flex justify-center items-center  bg-black/50 z-40">
                <div className="h-1/2 w-2/3 lg:w-1/2 relative flex flex-col items-center justify-center bg-white rounded
                                md:flex-row">
                    {menuSelected()}
                </div>
            </div>
        ) : <></>
    )
}

export default ModalConnection