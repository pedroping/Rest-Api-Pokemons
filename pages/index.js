import Styles from '../styles/Home.module.css'
import Link from 'next/link'
import Footer from '../components/Footer'
import Image from 'next/image'
import Card from '../components/Card'

export async function getStaticProps(){
  const api = 'https://pokeapi.co/api/v2/pokemon/';
  const maxPokemons = 251;

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json();

  data.results.forEach((item, index)=> {
    item.id = index + 1;
  });

  return{
    props: {
      pokemons: data.results,
    },
    revalidate: 10,
  }
}


export default function Home({pokemons}) {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.tittle_container}>
        <h1>Poke<span>Dex</span></h1>
        <Image src="/pokeball.png" width="50" height="50" alt=""></Image>
      </div>
      <div className={Styles.pokemon_container}>
        {pokemons.map((pokemon) =>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
      <Footer />
  </div>
    
  )
}
