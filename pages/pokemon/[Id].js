import Image from "next/image";
import { useState } from "react";
import Footer from "../../components/Footer";
import Styles from "../../styles/Pokemon.module.css"
import React from "react";
import { useEffect } from "react";
import Link from "next/link";

export const getStaticPaths = async () => {

    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const maxPokemons = 251;

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return{
            params: {Id: (index + 1).toString()},
        }
    })

    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async ({params}) => {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.Id}`);
    const data = await res.json();
    const max = 251;
    return{
        props: {
            maxPokemons: max,
            pokemon: data
        },
    }
}


export default function Pokemon({pokemon, maxPokemons}){
    const [proximo, setProximo ] = useState(pokemon.id);
    const [url, setUrl] = useState();

    const Proximo_function = function(){
        if(pokemon.id + 1 > maxPokemons){
            alert("Voce chegou ao fim!")
            setUrl(`/`);
        } else {
          setProximo(pokemon.id + 1);
          setUrl(`/pokemon/${proximo + 1}`);  
        }
    }

    return(
           <div className={Styles.main_container}>
                    <Image
                        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                        width="300"
                        height="300"
                        alt=""
                    />
                    <a className={Styles.tittle}>{pokemon.name.toUpperCase()}</a>
                <div>
                    <h3>Id:</h3>
                    <p>{pokemon.id}</p>
                </div>
                <div>
                    <h3>Tipos:</h3>
                    <div className={Styles.types_container}>
                        {pokemon.types.map((type, index) =>
                            <span key={index} className={`${Styles.type} ${Styles['type_' + type.type.name]}`}>
                                {type.type.name.toUpperCase()}
                            </span>
                        )}
                    </div>
                </div>
                <div className={Styles.data_container}>
                    <div className={Styles.data_altura}>
                        <h4>Altura:</h4>
                        <p>{pokemon.height * 10} CM</p>
                    </div>
                    <div className={Styles.data_peso}>
                        <h4>Peso:</h4>
                        <p>{pokemon.weight / 10} KG</p>
                    </div>
                </div>
                <div>
                    <a onClick={() => {Proximo_function()}} href={url} className={Styles.link}>
                        Proximo <span>Pokemon</span>
                    </a>  
                </div>
            <div>
                <Footer />  
            </div>
        </div> 
            
        
    )
}