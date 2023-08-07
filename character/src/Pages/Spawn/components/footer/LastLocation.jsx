import './styles.css'

import LastLocationIcon from '../../../../public/lastLocation.svg'


function LastLocation() {
    return (
        <>
        
            <button className='lastLocationButton'>

                <img src={LastLocationIcon} alt="" />
                <p>Última localização</p>
                
            </button>

        </>
    )
}

export default LastLocation