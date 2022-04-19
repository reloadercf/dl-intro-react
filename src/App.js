import './App.css';

import Character from './components/Character/Character';

import Data from './Data.js'

function App() {
  return (
    <div className="App">
     <h1>Welcome to Datalovers with react</h1>
     <div className='container-character'>
       {Data.results.map(unpersonaje=>
       <Character todaslaspropiedades={unpersonaje} key={unpersonaje.id} />
     )}
     </div>
    </div>
  );
}

export default App;
