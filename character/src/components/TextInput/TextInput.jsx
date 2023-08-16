import { useState } from "react";
import './styles.css'

export default function TextInput({disabled, title, augmented, value}) {

    return(
        <>
        
            <label className="inputContainer text">

                {title}
                <input type="text" value={value} disabled={disabled}/>
                {augmented && <div className="augmentedBorder inputAugmented" data-augmented-ui="tl-round br-round border"></div>}

            </label>

        </>
    )

}