import './styles.css'

function SpawnHeader({description,zone}) {
    return (
        <>
            <header className='spawnHeader'>
                <div className='title'>
                    <h1>Selecionar Spawn</h1>
                    <h2>Selecione o lugar que deseja nascer</h2>
                </div>
                <div className='local'>
                    <h1>Selecionar Spawn <span>| {zone}</span></h1>
                    <h2>{description}</h2>
                </div>
            </header>
        </>
    )
}

export default SpawnHeader