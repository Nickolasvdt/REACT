import { useState } from "react";
import './styles.css'

export default function InfoInput({ title, augmented, handle, index, image, placeholder, inputType}) {

    console.log(index)

  /*   const handleKeyPress = (e) => {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])$/;
        return regex.test(input);
    };
 */
    return(
        <>
        
            <label className="inputContainer text">

                {title}
                {inputType == 'number' ? 
                    <input type="number" inputMode="numeric" 
                    onKeyPress={(e) => {
                        if (inputType === 'number') {
                          const key = e.key;
                          const isNumber = /^\d$/.test(key);
                          if (!isNumber) {
                            e.preventDefault();
                          }
                        }
                      }}
                    placeholder={placeholder} onChange={(e) => handle(e, index)}/> 
                    : 
                    <input type="text" placeholder={placeholder} onChange={(e) => handle(e, index)}/>
                }
                <div className="inputImageContainer">
                    <img src={image} alt="" />
                </div>
                {augmented && <div className="augmentedBorder inputAugmented" data-augmented-ui="tl-round br-round border"></div>}

            </label>

        </>
    )

}