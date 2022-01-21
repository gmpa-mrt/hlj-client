import NavBar from "../components/NavBar";
import {useWindowSize} from "../hooks/useWindowSize";

export default function Home() {
    const { windowSize } = useWindowSize()

    return (
        <>
            <NavBar/>
            <main className="container mx-auto">
                <h1 className="mt-11 w-full text-white font-bold text-5xl text-center">
                    Happy <br/> to Learn Japanese
                </h1>
                {windowSize.width > 800
                    ? (
                        <div>
                            <h2>OK</h2>
                        </div>
                    ) : (
                        <div>
                            <h2>KO </h2>
                        </div>
                    )
                }
            </main>
        </>
    )
}
