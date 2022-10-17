import Image from "next/image"
import Styles from "../styles/Sobre.module.css"
import Footer from "../components/Footer";

export default function Sobre(){
    return(

        <div className={Styles.sobre}>
            <h1>Sobre o Projeto</h1>
            <p>Eu fiz esse projeto com o unico objetivo de aprender mais sobre next.js
                e Rest Apis. 
            </p>
            <Image
                src="/rayquaza.png"
                width="400"
                height="400"
                alt=""
                />
            <Footer />
        </div>
        
    )
}