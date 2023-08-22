
import {useState, useEffect, useContext} from 'react'

import PerspectiveSelector from '../../components/PerspectiveSelector/PerspectiveSelector'
import RotateCam from '../../components/RotateCam/RotateCam'
import CustomizationMenu from '../../components/CustomizationMenu/CustomizationMenu'
import { CharacterList } from '../../Contexts/Characters'
import PlayerInfos from '../../components/PlayerInfos/PlayerInfos'
import CustomModal from '../../components/CustomModal/CustomModal'

export default function ChooseCharacter() {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters], [modalIsOpen, setModalIsOpen]] = useContext(CharacterList)

    return (
        <>
                <div className="pageContainer">

                    <PerspectiveSelector/>

                    <CustomizationMenu type={'home'}/>

                    <PlayerInfos type={'home'} />

                    <RotateCam/>
                   
                    <CustomModal modalStatus={modalIsOpen}/>

                </div>
        </>
    )
}
