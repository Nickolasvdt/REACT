
import {useState, useEffect, useContext} from 'react'

import PerspectiveSelector from '../../components/PerspectiveSelector/PerspectiveSelector'
import RotateCam from '../../components/RotateCam/RotateCam'
import CustomizationMenu from '../../components/CustomizationMenu/CustomizationMenu'
import { CharacterList } from '../../Contexts/Characters'
import PlayerInfos from '../../components/PlayerInfos/PlayerInfos'

export default function ChooseCharacter() {

    return (
        <>
                <div className="pageContainer">

                    <PerspectiveSelector/>

                    <CustomizationMenu type={'home'}/>

                    <PlayerInfos />

                    <RotateCam/>

                </div>
        </>
    )
}
