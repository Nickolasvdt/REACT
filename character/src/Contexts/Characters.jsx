
import React, {createContext, useState} from 'react'

export const CharacterList = createContext([])

function Characters ({children}) {

    const [character, setCharacter] = useState([
        {
            name : 'Nickolas',
            passport : 8,
            cellphone : '8888-8888',
            age : 20,
        },
        {
            name : 'Louis',
            passport : 9,
            cellphone : '9999-9999',
            age : 20,
        },
    ])

    return (
        <CharacterList.Provider value={[character, setCharacter]}>
            {children}
        </CharacterList.Provider>
    )
}

export default Characters