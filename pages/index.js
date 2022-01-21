import Card from "../components/Card";
import NavBar from "../components/NavBar";
import {useWindowSize} from "../hooks/useWindowSize";

import test from "../public/test.jpg"


export default function Home() {
    const { windowSize } = useWindowSize()

    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main className="container mx-auto">
                <h1 className="my-11 w-full text-white font-bold text-3xl text-center md:text-5xl mb-20">
                    Happy <br/> to Learn Japanese
                </h1>
                <div className="my-5 flex flex-col items-center lg:flex-row justify-around">
                    <Card img={test}>
                        <p className="text-sm px-4 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate debitis
                            dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi officia
                            pariatur perspiciatis rerum veritatis?
                        </p>
                    </Card>
                    <Card img={test}>
                        <p className="text-sm px-4 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate debitis
                            dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi officia
                            pariatur perspiciatis rerum veritatis?
                        </p>
                    </Card>
                    <Card img={test}>
                        <p className="text-sm px-4 my-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate debitis
                            dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi officia
                            pariatur perspiciatis rerum veritatis?
                        </p>
                    </Card>
                </div>
            </main>
        </>
    )
}
