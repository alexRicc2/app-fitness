import React from 'react';
import {ReactComponent as Home} from "../../images/home.svg";
import {ReactComponent as Gym} from "../../images/fitness.svg";
import {ReactComponent as Chat} from "../../images/chat.svg";
import {ReactComponent as Shop} from "../../images/shopping.svg";
import {ReactComponent as Person} from "../../images/person.svg";
function NavBarBottom(){
    
        return ( 
            <nav>
                <ul className="navbarBottom">
                    <li>
                        <Shop className="navbarBottom__icones"/>
                    </li>
                    <li>
                        <Person className="navbarBottom__icones"/>
                    </li>
                    <li>
                        <Home className="navbarBottom__icones"/>
                    </li>
                    <li>
                        <Gym className="navbarBottom__icones"/>
                    </li>
                    <li>
                        <Chat className="navbarBottom__icones"/>
                    </li>
                </ul>
            </nav>
         );
    
}
 
export default NavBarBottom;