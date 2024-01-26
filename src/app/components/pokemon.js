"use client"
import Image from "next/image";
import style from "./pokemon.module.css";
import { useState , useEffect } from "react";
function Pokemon(){
    const [pokemon,setPokemon]=useState("/vercel.svg")
    const [estado , setEstado]=useState("Esperando...")

    const [numero , setNumero]=useState("Esperando...")

    const [tipo , setTipo]=useState("Esperando...")

    const [altura , setAltura]=useState("Esperando...")

    const [peso , setPeso]=useState("Esperando...")

    const [habilidad0 , setHabilidad0]=useState("Esperando...")
    const [habilidad1 , setHabilidad1]=useState("Esperando...")

    const [vida , setVida]=useState("Esperando...")
    const [ataque , setAtaque]=useState("Esperando...")
    const [defensa , setDefenza]=useState("Esperando...")
    const [velocidad , setVelocidad]=useState("Esperando...")

    const url="https://pokeapi.co/api/v2/pokemon/195"

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setPokemon(data.sprites.front_default),
            setEstado(data.species.name),
            setHabilidad0(data.abilities[0].ability.name),
            setHabilidad1(data.abilities[1].ability.name),

            setTipo(data.types[0].type.name),
            setAltura(data.height),
            setPeso(data.weight),

            setVida(data.stats[0].base_stat),
            setAtaque(data.stats[1].base_stat),
            setDefenza(data.stats[2].base_stat),
            setVelocidad(data.stats[5].base_stat),
            setNumero(data.id)
        })
    },[]);
    return(
        <div className={style.contenedor}>
            <h1>My Pokemon</h1>
            <div className={style.image_container}>
                <h1>{estado}</h1>
                <h1 className={style.numero}>#{numero}</h1>
                <Image src={pokemon} height={250} width={250}/>
            </div>

            
            <div className={style.about_container}>
                <h1 className={style.title}>About</h1>
                <div className={style.about_content}>
                    <h1>Type</h1>
                    <h1 className={style.stats} >{tipo}</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Height</h1>
                    <h1 className={style.stats}>{altura} m</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Weight</h1>
                    <h1 className={style.stats}>{peso} kg</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Abilities</h1>
                    <h1 className={style.stats}>{habilidad0}, {habilidad1}</h1>
                </div>  
            </div>

            <div className={style.about_container}>
                <h1 className={style.title}>Stats</h1>
                <div className={style.about_content}>
                    <h1>HP</h1>
                    <h1 className={style.stats} >{vida}</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Attack</h1>
                    <h1 className={style.stats} >{ataque}</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Defense</h1>
                    <h1 className={style.stats} >{defensa}</h1>
                </div>
                <div className={style.about_content}>
                    <h1>Speed</h1>
                    <h1 className={style.stats}>{velocidad}</h1> 
                </div>
            </div>
        </div>
    )
}

export default Pokemon;