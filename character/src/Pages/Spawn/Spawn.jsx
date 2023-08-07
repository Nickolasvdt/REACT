
import './styles.css';

import SpawnHeader from './components/header/SpawnHeader';
import LastLocation from './components/footer/LastLocation';
import SpawnMain from './components/main/SpawnMain';

function Spawn() {

  return(
    <>
      <div id="spawn">
      
        <SpawnHeader zone={'Norte'} description={'Ótimo lugar para caçar e pescar'}/>
        <SpawnMain/>
        <LastLocation/>
  
      </div>
    </>
  )


}

export default Spawn;