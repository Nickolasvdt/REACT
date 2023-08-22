
import {useState, useEffect, useContext} from 'react'
import './styles.css'

import PerspectiveSelector from '../../components/PerspectiveSelector/PerspectiveSelector'
import RotateCam from '../../components/RotateCam/RotateCam'
import CategoriesMenu from './components/CategoriesMenu/CategoriesMenu'
import { CharacterList } from '../../Contexts/Characters'
import CustomModal from '../../components/CustomModal/CustomModal'
import InfoInput from './components/PersonalInputs/InfoInput'
import Button from "../../components/Button/Button"

import NameIcon from '../../assets/creator/nameIcon.svg'
import AgeIcon from '../../assets/creator/ageIcon.svg'
import BirthdayeIcon from '../../assets/creator/birthdayIcon.svg'

export default function Creator() {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters], [modalIsOpen, setModalIsOpen], [tempCharacter, setTempCharacter]] = useContext(CharacterList)

    const [tempCharacterInfos, setTempCharacterInfos] = useState({
        ['personal'] : {
            name : 'josé',
            passport : 8,
            cellphone : '8888-8888',
            age : 20,
            balance : 8000,
            lastLocation : 'Pirituba',
            birthday : '05/05',
        },
        ['setable'] : {
            fathersID : 0,
            mothersID : 0,
            skinColor : 0,
            shapeMix : 0.0,
            eyesColor : 0,
            eyebrowsHeight : 0,
            eyebrowsWidth : 0,
            noseWidth : 0,
            noseHeight : 0,
            noseLength : 0,
            noseBridge : 0,
            noseTip : 0,
            noseShift : 0,
            cheekboneHeight : 0,
            cheekboneWidth : 0,
            cheeksWidth : 0,
            lips : 0,
            jawWidth : 0,
            jawHeight : 0,
            chinLength : 0,
            chinPosition : 0,
            chinWidth : 0,
            chinShape : 0,
            neckWidth : 0,
            hairModel : 4,
            firstHairColor : 0,
            secondHairColor : 0,
            eyebrowsModel : 0,
            eyebrowsColor : 0,
            beardModel : -1,
            beardColor : 0,
            chestModel : -1,
            chestColor : 0,
            blushModel : -1,
            blushColor : 0,
            lipstickModel : -1,
            lipstickColor : 0,
            blemishesModel : -1,
            ageingModel : -1,
            complexionModel : -1,
            sundamageModel : -1,
            frecklesModel : -1,
            makeupModel : -1 
        }
    })

    const teste = tempCharacterInfos

    function handlePersonal(e, index) {
        if(index == 'birthday') {
            const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;
            if(!regex.test(e.target.value)) {
                return
            }
        }
        teste.personal[index] = e.target.value
    }

    const cancel = () => {
        console.log('clicou em cancelar')
    }

    const finish = () => {
        console.log('clicou em finalizar')
    }

    return (
        <>

            <div className="pageContainer">

            <CategoriesMenu tempInfos={tempCharacterInfos}/>

            <div className='creatorPlayerInfos'>
                <InfoInput index={'name'} handle={handlePersonal} inputType="text" title={'Nome e Sobrenome'} placeholder="Digite seu nome" augmented={true} image={NameIcon}/>
                <InfoInput index={'age'} handle={handlePersonal} inputType="number" title={'Idade'} placeholder="Digite sua idade" augmented={true} image={AgeIcon}/>
                <InfoInput index={'birthday'} handle={handlePersonal} title={'Aniversário'} inputType="text" placeholder="dd/mm" augmented={true} image={BirthdayeIcon}/>
                

                <div className="buttons">          
                    <Button action={cancel} type={'cancel'} text={'Cancelar'} width={'8.95vw'} height={'2.55vw'}/>
                    <Button action={finish} type={'confirm'} text={'Concluir'} width={'8.95vw'} height={'2.55vw'}/>
                </div>
            </div>  

            <PerspectiveSelector/>

            <RotateCam/>

            <CustomModal modalStatus={modalIsOpen}/>

            </div>

        </>
    )
}
