import { useState, useEffect, useContext } from "react";
import './styles.css'
import { CharacterList } from '../../Contexts/Characters'

export default function ItemSelector({optionsNumber, type,chooseCharacter},) {

    const [character, setCharacter] = useContext(CharacterList)
    useEffect(() => {
       /*  console.log('useEffect') */
    },[character])

    const changeCharacter = (e) => {
        chooseCharacter.setSelectedCharacter(e)
      /*   console.log(e) */
    }

    /* 
        -fazer com que aqui eu pegue as informações de quais são os personagens disponíveis usando o useContext

        - quando selecionar um personagem (ou o de criar um), usar o context para puxar as informações de qual foi clicado com base no clique e chamar a função de fechar a NUI
    */

    /* let characters = [
        {
            name : '',
            passport : 0
        },
        {
            name : '',
            passport : 1
        },
        {
            name : '',
            passport : 2
        },
    ] */

    return(
        <>
        
            <div className="itemSelectorContainer">

                {character.map((v, k) => (
                    <div onClick={(e) => changeCharacter(v)} className={type == 'character' ? 'item character' : 'item page'} key={v.passport}>
                        {chooseCharacter.selectedCharacter == v && <div className="augmentedBorder" data-augmented-ui="tl-round br-round border"></div>}
                    </div>
                ))}

            </div>

        </>
    )

}