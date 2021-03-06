import Image from "next/image";
import Link from "next/link";
import {useQuery} from "react-query";
import {fetchJson} from "../lib/api";
import Burger from "./Burger";
import useWindowSize from "../hooks/useWindowSize";
import exitIcon from "../public/exit.svg";
import logo from "../public/favicon.ico";
import userIcon from "../public/user.svg";

function NavBar({ visible, toggle }) {

    const { windowSize } = useWindowSize()
    const query = useQuery('user', async () => {
        try {
            return await fetchJson('http://localhost:4000/me')
        } catch {
            return  undefined
        }
    }, {
        cacheTime: Infinity,
        staleTime: 10_000 //ms
    })

    const user = query.data

    console.log('[NavaBar] user', user)


    return (
        <nav className={visible ? 'nav' : 'nav-fixed'}>
            {windowSize.width < 800 && (
                <Burger/>
            )}
            <Image src={logo} alt="logo"
                   width={50} height={50}/>
            {windowSize.width < 800
                ? <></>
                : (
                    <ul className="inline-flex space-x-20 text-white font-bold">
                        <li>
                            <Link href={'/'}>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/gallery'}>
                                <a>Gallery</a>
                            </Link>
                        </li>
                        <li>Mylib</li>
                        <li>Practice</li>
                    </ul>
                )}
            <ul className="inline-flex space-x-6">
                {windowSize.width < 800
                    ? <></>
                    : (
                        <li>
                            <Image src={userIcon} alt=""
                                   width={25} height={25}
                                   onClick={toggle}/>
                        </li>
                    )}
                <li>
                    <Image src={exitIcon} alt=""
                           width={25} height={25}/>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar