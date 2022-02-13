import useModal from "../hooks/useModal";
import useVisible from "../hooks/useVisible";
import ModalConnection from "./ModalConnection";
import NavBar from "./NavBar";

function Layout({ children }) {

    const [ref, visible] = useVisible({threshold: .1});
    const { toggle, display } = useModal()

    return (
        <>
            <ModalConnection display={display} toggle={toggle}/>
            <header ref={ref} className="h-20 w-full">
                <NavBar visible={visible} toggle={toggle}/>
            </header>
            <main className="container mx-auto">
                {children}
            </main>
        </>
    )
}

export default Layout