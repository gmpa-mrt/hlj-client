import Card from "../components/Card";
import Layout from "../components/Layout";
import {getAllKanji} from "../lib/kanji";
import test from "../public/test.jpg"


export async function getStaticProps() {
    const { result, currentPage, pages } = await getAllKanji()
    return {
        props: { result, currentPage, pages }
    }
}

//@Add pagination to see react-paginate

function Gallery({ result, currentPage, pages }) {
    return (
        <Layout>
            {/*@Todo SearchBar*/}
            <div className="flex flex-col items-center md:flex-row flex-wrap">
                {result.map((kanjis, id) =>
                    <Card img={test} key={id}>
                        <button className="absolute top-1 right-2">Like</button>
                        <ul className="w-full flex flex-col items-center space-y-4 my-5">
                            <li>{kanjis.kanji.character}</li>
                            <li>english</li>
                        </ul>
                        <button>add</button>
                    </Card>
                )}
                <button>Previous</button>
                <span>{currentPage} / {pages}</span>
                <button>Next</button>
            </div>
        </Layout>
    )
}

export default Gallery