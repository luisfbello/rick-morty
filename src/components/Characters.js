import React from "react";
import { Character } from "./Character";


function Characters(props) {
    
    const {characters,setCharacters} = props

     const resetCharacters =()=>{
        setCharacters(null);
     }   

    return(
        <div className="characters" >
            <h1>Personajes</h1>
            <button onClick={resetCharacters}>Regresar</button>
            <div className="container-characters">
                {characters.map((character,index)=>(
                    <Character character={character}
                                index={index}
                    />
                ))}
                
            </div>
            <button onClick={resetCharacters}>Regresar</button>
            
        </div>
        
    )
}

export {Characters}