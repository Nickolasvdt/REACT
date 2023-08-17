
import React, {createContext, useState} from 'react'

export const CharacterList = createContext([])

function Characters ({children}) {

    const [character, setCharacter] = useState([
        {
            ['personal'] : {
                name : 'Nickolas',
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
        },
        { 
            name : 'Louis Little Chicken',
            passport : 9,
            cellphone : '9999-9999',
            age : 20,
            balance : 9000,
            lastLocation : 'Pouso Alegre',
            birthday : '05/05',
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
    ])

    const [selectedCharacter, setSelectedCharacter] = useState(character[0])
    const [maxCharacters] = useState(3)

    return (
        <CharacterList.Provider value={[[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters]]}>
            {children}
        </CharacterList.Provider>
    )
}

export default Characters