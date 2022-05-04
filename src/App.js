import { useState } from 'react';
import './App.css';
import Paths from './components/Paths';
import {
  BrowserRouter,
} from "react-router-dom";
// import your route components too
import { getAuth, onAuthStateChanged } from "firebase/auth";


  
function App() {
  const [isAutenticate, setAutenticate]=useState(null)
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAutenticate(user)
    } else {
      setAutenticate(null)
    }
  });
  return (
    <div>
      <BrowserRouter><Paths isAutenticate={isAutenticate} /></BrowserRouter>
    </div>
     
  );
}

export default App;
