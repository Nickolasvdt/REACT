import { useState, useContext } from "react";
import './styles.css'
import {CharacterList} from "../../Contexts/Characters";
import TextInput from "../TextInput/TextInput";

function MoneyFormat(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value)
}

export default function PlayerInfos() {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter]] = useContext(CharacterList)

    let index = character.indexOf(selectedCharacter)

    console.log(selectedCharacter)
    console.log(character[index])
    console.log(character[index].balance)

    return(
        <>
        
            <form className="playerInfos">
                <TextInput value={'$ '+MoneyFormat(character[index].balance)} augmented={true} title={'Saldo Bancário'} disabled={true}/>
                <TextInput value={character[index].lastLocation} augmented={true} title={'Última Localização'} disabled={true}/>
                <TextInput value={character[index].birthday} augmented={true} title={'Data de Aniversário'} disabled={true}/>
            </form>

        </>
    )

}
/* 
moneyFormat(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(value)
}, */