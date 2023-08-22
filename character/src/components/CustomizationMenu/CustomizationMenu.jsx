import { useState, useContext, useEffect } from "react";
import './styles.css'
import PageTitle from "../PageTitle/PageTitle";
import ItemSelector from '../ItemSelector/ItemSelector'
import TextInput from "../TextInput/TextInput";
import {CharacterList} from "../../Contexts/Characters";
import Button from "../../components/Button/Button"
import { useNavigate } from 'react-router-dom';

export default function CustomizationMenu({type}) {


    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters], [modalIsOpen, setModalIsOpen]] = useContext(CharacterList)

    const navigate = useNavigate()

    const handlePage = () => {
        navigate('/spawn');
    }

    console.log(type)

    return(
        <>
        
            <div className="customizationMenu">

                <PageTitle characters={character} selected={{selectedCharacter, setSelectedCharacter}}/>

                <section>

                    <ItemSelector chooseCharacter={{selectedCharacter, setSelectedCharacter}} type={type == 'home' ? 'character' : 'page'}/>
                    

                    {type == 'home' && 
                        <div className="homePageMenu">

                            <form>
                                <TextInput value={selectedCharacter.personal.name} augmented={true} title={'Nome e Sobrenome'} disabled={true}/>
                                <TextInput value={selectedCharacter.personal.passport} title={'Passaporte'} disabled={true}/>
                                <TextInput value={selectedCharacter.personal.cellphone} title={'Telefone'} disabled={true}/>
                                <TextInput value={selectedCharacter.personal.age} title={'Idade'} disabled={true}/>
                            </form>

                            <div className="buttons">

                                
                               <Button action={handlePage} type={'confirm'} text={'Selecionar'} width={'8.95vw'} height={'2.55vw'}/>
                               <Button type={'cancel'} text={'Excluir'} width={'8.95vw'} height={'2.55vw'}/>

                            </div>

                        </div>
                    }

                </section>


            </div>

        </>
    )

}