import { useState, useEffect, useContext } from "react";
import './styles.css'
import { CharacterList } from '../../Contexts/Characters'
import CreateNewCharacter from '../../assets/chooseCharacter/createNewCharacter.svg'

export default function ItemSelector({type}) {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters]] = useContext(CharacterList)

    const changeCharacter = (e) => {
        setSelectedCharacter(e)
    }



    return(
        <>
        
            <div className="itemSelectorContainer">

                {character.map((v, k) => (
                    <div onClick={(e) => changeCharacter(v)} className={(type == 'character' ? (selectedCharacter == v ? 'item character selected' : 'item character') : 'item page')} key={k}>
                        {selectedCharacter == v && <div className="augmentedBorder" data-augmented-ui="tl-round br-round border"></div>}
                    </div>
                ))}
                {
                    <div onClick={(e) => changeCharacter(v)} className='item character createNewCharacter'>
                        <img src={CreateNewCharacter} alt="" />
                    </div>
                }

            </div>

        </>
    )

}