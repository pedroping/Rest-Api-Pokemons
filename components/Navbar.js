import Link from "next/link";
import Image from "next/image";
import Styles from "../styles/Navbar.module.css"

export default function Navbar (){
    return(
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <Image src="/pokeball.png" width="30" height="30" alt=""></Image>
                <Link href="/">
                    <a>Poke<span>dex</span></a>
                </Link>
                
            </div>
            <ul className={Styles.links}>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                <Link href="/sobre">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}