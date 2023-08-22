import './styles.css'
import {useState, useEffect, useContext} from 'react'
import {CharacterList} from "../../Contexts/Characters";

export default function Button({type, text, width, height, action}) {

    const buttonStyle = {
        width: width,
        height: height
    };

    return(
        <>
        
            <button onClick={action} style={buttonStyle} className={type == 'confirm' ? 'confirmButton' : 'cancelButton'}>
                <p>{text}</p>
            </button>

        </>
    )

}