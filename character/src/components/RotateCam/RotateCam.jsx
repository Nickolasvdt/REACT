import { useState } from 'react'
import './styles.css'

import RotatePlayerIcon from '../../assets/perspective/rotatePlayerIcon.svg'

export default function RotateCam() { // FAZER função de chamar função pelas teclas

    return(
        <>
        
            <div className="rotatePlayer">

            <h1>A</h1>

            <img src={RotatePlayerIcon} alt=""/>

            <h1>D</h1>

            </div>

        </>
    )
    
}