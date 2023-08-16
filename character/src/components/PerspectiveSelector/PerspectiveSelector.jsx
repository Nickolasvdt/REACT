import { useState } from 'react'
import './styles.css'
import Face from '../../assets/perspective/facePerspective.svg'
import FaceActive from '../../assets/perspective/facePerspectiveActive.svg'
import Eye from '../../assets/perspective/eyePerspective.svg'
import EyeActive from '../../assets/perspective/eyePerspectiveActive.svg'
import Mouth from '../../assets/perspective/mouthPerspective.svg'
import MouthActive from '../../assets/perspective/mouthPerspectiveActive.svg'

export default function PerspectiveSelector() {

    const [perspective, setPerspective] = useState("")

    const togglePerspective = (e) => {
        e.preventDefault()
        let perspective = perspective
        console.log(perspective)
        // Fazer post
    }

    return (
        <>

            <div className="choosePlayerCam">
                
                <div onClick={(e) => setPerspective('face')} className="perspective">

                    {perspective != 'face' && <img className={perspective != 'face' ? 'showElementAnimation' : ''} src={Face} alt=""/>}
                    {perspective == 'face' && <img className={perspective == 'face' ? 'changeElementAnimation' : ''} src={FaceActive} alt=""/>}

                </div>
                <div onClick={(e) => setPerspective('eye')} className="perspective">

                    {perspective != 'eye' && <img className={perspective != 'eye' ? 'showElementAnimation' : ''} src={Eye} alt=""/>}
                    {perspective == 'eye' && <img className={perspective == 'eye' ? 'changeElementAnimation' : ''} src={EyeActive} alt=""/>}

                </div>
                <div onClick={(e) => setPerspective('mouth')} className="perspective">

                    {perspective != 'mouth' && <img className={perspective != 'mouth' ? 'showElementAnimation' : ''} src={Mouth} alt=""/>}
                    {perspective == 'mouth' && <img className={perspective == 'mouth' ? 'changeElementAnimation' : ''} src={MouthActive} alt=""/>}

                </div>

            </div>

            

        </>
    )
}