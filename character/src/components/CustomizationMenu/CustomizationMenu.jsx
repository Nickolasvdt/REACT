import { useState, useContext, useEffect } from "react";
import './styles.css'
import PageTitle from "../PageTitle/PageTitle";
import ItemSelector from '../ItemSelector/ItemSelector'
import TextInput from "../TextInput/TextInput";
import {CharacterList} from "../../Contexts/Characters";

export default function CustomizationMenu({type}) {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter]] = useContext(CharacterList)

    return(
        <>
        
            <div className="customizationMenu">

                <PageTitle characters={character} teste={{selectedCharacter, setSelectedCharacter}}/>

                <section>

                    <ItemSelector chooseCharacter={{selectedCharacter, setSelectedCharacter}} type={type == 'home' ? 'character' : 'page'}/>

                    {type == 'home' && 
                        <form className="homePageMenu">
                            <TextInput value={selectedCharacter.name} augmented={true} title={'Nome e Sobrenome'} disabled={true}/>
                            <TextInput value={selectedCharacter.passport} title={'Passaporte'} disabled={true}/>
                            <TextInput value={selectedCharacter.cellphone} title={'Telefone'} disabled={true}/>
                            <TextInput value={selectedCharacter.age} title={'Idade'} disabled={true}/>
                        </form>
                    }

                </section>

            </div>

        </>
    )

}