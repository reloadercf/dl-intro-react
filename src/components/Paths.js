import {
Routes,
Route,
} from "react-router-dom";

import Character from "./autenticate/Character/Character";
import Login from "./noautenticate/Login";

import {loginWithGoogle, logout} from '../lib/firebaseAuth.js'

const Paths = ({isAutenticate}) => {
    return ( 
    <div>
        {isAutenticate?
        <Routes>
            <Route path="/" element={<Character logout={logout} />}>
            </Route>
        </Routes>:
        <Routes>
            <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />}>
            </Route>
        </Routes>}
      </div> );
}
 
export default Paths;
