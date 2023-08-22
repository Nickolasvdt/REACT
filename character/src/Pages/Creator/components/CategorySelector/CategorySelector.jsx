import { useState, useEffect, useContext } from "react";
import './styles.css'

import Identity from '../../../../assets/creator/identity.svg'
import Skin from '../../../../assets/creator/skin.svg'
import Eyes from '../../../../assets/creator/eyes.svg'
import Nose from '../../../../assets/creator/nose.svg'
import Structure from '../../../../assets/creator/structure.svg'
import Barber from '../../../../assets/creator/barber.svg'

export default function CategorySelector({infos, selected,setSelected}) {

/*     console.log(infos)
    console.log(selected)
    console.log(setSelected) */

    const changeCategory = (e) => {
        setSelected(e)
    }

    const categories = [Identity, Skin, Eyes, Nose, Structure, Barber]

    return(
        <>
        
            <div className="itemSelectorContainer">
                
                {categories.map((v, k) => (
                     <div onClick={() => changeCategory(k)} className={selected == k ? 'item page selected' : 'item page'} key={k}>
                        <img src={v} alt="" />
                        {selected == k && <div className="augmentedBorder" data-augmented-ui="tl-round br-round border"></div>}
                     </div>
                ))}

            </div>

        </>
    )

}