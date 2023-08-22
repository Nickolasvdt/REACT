import { useState, useContext, useEffect } from "react";
import './styles.css'
import CategorySelector from '../CategorySelector/CategorySelector'
import {CharacterList} from "../../../../Contexts/Characters";
import Button from "../../../../components/Button/Button"
import CategoryPage from "../CategoryPage/CategoryPage";

export default function CategoriesMenu({tempInfos}) {

    const [[character, setCharacter], [selectedCharacter, setSelectedCharacter], [maxCharacters], [modalIsOpen, setModalIsOpen]] = useContext(CharacterList)
    
    const [selectedCategory, setSelectedCategory] = useState(0)

    /*
    types : 
        - button // 95px altura
        - radio
        - squareSelector
        - retangleSelector
    */

    const categories = [
        {
            label : 'Sexo',
            type : ''
        }
    ]
    

    return(
        <>
        
            <div className="customizationMenu">

                <div className="pageTitle">

                    <h1>Título da categoria</h1>

                </div>

                <section>

                    <CategorySelector selected={selectedCategory} setSelected={setSelectedCategory} infos={tempInfos}/>

                   
                    <div className="homePageMenu">

                        <CategoryPage/>

                        <div className="buttons">
                            
                            <Button type={'confirm'} text={'Próximo'} width={'8.95vw'} height={'2.55vw'}/>

                        </div>

                    </div>
                    

                </section>


            </div>

        </>
    )

}