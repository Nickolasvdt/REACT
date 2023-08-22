import { useState } from "react";
import './styles.css'

import ButtonSelector from "../CategoriesMenu/components/ButtonSelector/ButtonSelector";

export default function CategoryPage() {

    return(
        <>
        
            <div className="categoryPage">

                <ButtonSelector/>
        
            </div>

        </>
    )

}