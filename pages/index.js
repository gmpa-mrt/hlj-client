import Card from "../components/Card";
import Layout from "../components/Layout";
import test from "../public/test.jpg"

export default function Home() {
    return (
        <Layout>
            <h1 className="w-full my-5 text-white font-bold text-3xl text-center md:text-5xl">
                Happy <br/> to Learn Japanese
            </h1>
            <div className="my-5 flex flex-col items-center lg:flex-row justify-around lg:mt-20">
                <Card img={test}>
                    <p className="text-sm px-4 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate
                        debitis
                        dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi
                        officia
                        pariatur perspiciatis rerum veritatis?
                    </p>
                </Card>
                <Card img={test}>
                    <p className="text-sm px-4 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate
                        debitis
                        dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi
                        officia
                        pariatur perspiciatis rerum veritatis?
                    </p>
                </Card>
                <Card img={test}>
                    <p className="text-sm px-4 my-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda beatae cupiditate
                        debitis
                        dignissimos dolore, dolorem ducimus eaque explicabo id in incidunt inventore laudantium modi
                        officia
                        pariatur perspiciatis rerum veritatis?
                    </p>
                </Card>
            </div>
        </Layout>
    )
}
