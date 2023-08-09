import './styles.css'
import {useState, useEffect} from 'react'

const medias = ['Instagram', 'TikTok', 'FiveM', 'Amigos', 'Outros']

import Instagram from '../../assets/feedback/Instagram.svg'
import TikTok from '../../assets/feedback/Tiktok.svg'
import Fivem from '../../assets/feedback/Fivem.svg'
import Friends from '../../assets/feedback/Friends.svg'
import Others from '../../assets/feedback/Others.svg'

// Pesquisar como fazer de um jeito mais automatizado (required)

const Images = [Instagram, TikTok, Fivem, Friends, Others]


export default function Feedback() {

    const [selectedMedia, setSelectedMedia] = useState("")

    const confirmFeedback = (e) => {
        e.preventDefault()
        let media = selectedMedia
        // Fazer post
    }

    return (
        <>
            <div className='pageContainer'>

                <div className="feedbackContainer">

                    <h1>Estamos quase finalizando!</h1>

                    <div className="socialMedias">

                        {medias.map((v, k) => {
                            return (
                                <div onClick={(e) => setSelectedMedia(v)} className={v == selectedMedia ? 'socialMedia selected' : 'socialMedia'} key={k}>

                                    <img src={Images[k]} alt={'Imagem que representa ' + v} />

                                    <div className="socialMediaName">

                                        <p>{v}</p>

                                    </div>

                                    { selectedMedia == v &&
                                        <div className="augmentedBorder" data-augmented-ui="tl-round br-round border">



                                        </div>
                                    }

                                </div>
                            )
                        })}

                    </div>

                    <h2>Por último, selecione por onde você <span>conheceu a nossa cidade.</span></h2>

                    <button onClick={confirmFeedback}>
                        <p>Concluir</p>
                    </button>

                </div>

            </div>

        </>
    )
}
