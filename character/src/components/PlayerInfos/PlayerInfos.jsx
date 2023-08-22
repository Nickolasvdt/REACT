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

export default function PlayerInfos({type}) {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter]] = useContext(CharacterList)

    let index = character.indexOf(selectedCharacter)

/*     console.log(selectedCharacter)
    console.log(character[index])
    console.log(character[index].balance) */

    return(
        <>
        
            {
                type == 'home' && 
                <form className="playerInfos">
                    <TextInput value={'$ '+MoneyFormat(selectedCharacter.personal.balance)} augmented={true} title={'Saldo Bancário'} disabled={true}/>
                    <TextInput value={selectedCharacter.personal.lastLocation} augmented={true} title={'Última Localização'} disabled={true}/>
                    <TextInput value={selectedCharacter.personal.birthday} augmented={true} title={'Data de Aniversário'} disabled={true}/>
                </form>
            }
            {
                type != 'home' && 
                <form className="playerInfos">
                    <TextInput augmented={true} title={'Nome e Sobrenome'} disabled={false}/>
                    <TextInput augmented={true} inputType={'number'} title={'Idade'} disabled={false}/>
                    <TextInput augmented={true} title={'Data de Aniversário'} disabled={false}/>
                </form>
            }

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