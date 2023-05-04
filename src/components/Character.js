import React, { Fragment } from "react";


function Character(props){

    const {character,index}= props
    return( 
        
        <div className="character-container" key={index}>
            <div>
                <img src={character.image} alt={character.name}/>
            </div>
            <div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ? (
                        <Fragment>
                            <span className="alive"/>
                            Alive
                        </Fragment>
                    ):(
                        <Fragment>
                        <span className="dead"/>
                        Dead
                        </Fragment>
                    ) }
                    
                </h6>

                <p>
                    <span className="text-gray">Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-gray">Especie: </span>
                    <span>{character.species}</span>
                </p>
                <p>
                    <span className="text-gray">Genero: </span>
                    <span>{character.gender}</span>
                </p>
            </div>
        </div>

    );
}


export {Character}