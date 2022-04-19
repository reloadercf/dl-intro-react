import './Character.css'
import Gender from './Gender'

function Character ({todaslaspropiedades}){
    let {name, image, gender} =todaslaspropiedades
    return (
        <div className='character'>
            <img src={image} />
         <p>{name}</p>
         <Gender gender={gender} />
    </div>)
}

export default Character;