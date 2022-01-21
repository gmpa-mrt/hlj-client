import useVisible from "../hooks/useVisible";
import NavBar from "./NavBar";

function Layout({ children }) {

    const [ref, visible] = useVisible({threshold: .1});

    return (
        <>
            <header ref={ref} className="h-20 w-full">
                <NavBar visible={visible}/>
            </header>
            <main className="container mx-auto">
                {children}
            </main>
        </>
    )
}

export default Layout