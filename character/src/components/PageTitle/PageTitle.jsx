
import { useState } from "react";
import './styles.css'

export default function PageTitle({characters, teste}) {

    let index = characters.indexOf(teste.selectedCharacter)

    return(
        <>
        
           <div className="pageTitle">

                <h1>Personagem {index + 1}</h1>

            </div> 

        </>
    )

}