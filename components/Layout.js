import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({children}){
    return(
        <>
        <Head>
            <link rel="shortcut icon" href="pokebola_ico.ico"/>
            <title>Pokedex</title>
        </Head>        
        <Navbar />
        <main className="main-container">{children}</main>
        
        </>
    )
}