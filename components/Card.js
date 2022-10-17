import Image from "next/image"
import Link from "next/link"
import Styles from "../styles/Card.module.css"

export default function Card({pokemon}){

    return(
        <div className={Styles.main_container}>
              <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="120"
                height="120"
                alt=""
            />
            <p className={Styles.id}>Id:{pokemon.id}</p>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a className={Styles.tittle}>{pokemon.name.toUpperCase()}</a>
            </Link> 
        </div>
        
    )
}