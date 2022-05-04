import './Character.css'
import Data from '../../../Data.js'
function Character ({logout}){
    
    return (
        <div className='container-character'>
            <button onClick={()=>{logout()}}>Salir</button>
            {Data.results.map(unpersonaje=>
            <div className='character' key={unpersonaje.id}>
                <img src={unpersonaje.image} alt={unpersonaje.name} />
                <p>{unpersonaje.name}</p>
            </div>
            )}
         </div>
        )
}

export default Character;