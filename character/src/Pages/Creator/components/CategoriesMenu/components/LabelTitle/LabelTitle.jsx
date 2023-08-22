import { useState } from "react";
import './styles.css'

export default function LabelTitle({title}) {

    return(
        <>
        
            <h1 className="setableItemTitle">{title}</h1>

        </>
    )

}