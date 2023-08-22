
import { useState } from "react";
import './styles.css'

export default function PageTitle({characters, selected}) {

    let index = characters.indexOf(selected.selectedCharacter)

    return(
        <>
        
           <div className="pageTitle">

                <h1>Personagem {index + 1}</h1>

            </div> 

        </>
    )

}