import { useState, useContext } from "react";
import './styles.css'
import PageTitle from "../PageTitle/PageTitle";
import ItemSelector from '../ItemSelector/ItemSelector'
import TextInput from "../TextInput/TextInput";
import {CharacterList} from "../../Contexts/Characters";

export default function CustomizationMenu({type}) {

    const [character, setCharacter] = useContext(CharacterList)
   /*  console.log(JSON.stringify(character)) */
    const [selectedCharacter, setSelectedCharacter] = useState(character[0])

    return(
        <>
        
            <div className="customizationMenu">

                <PageTitle/>

                <section>

                    <ItemSelector chooseCharacter={{selectedCharacter, setSelectedCharacter}} optionsNumber={3} type={type == 'home' ? 'character' : 'page'}/>

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