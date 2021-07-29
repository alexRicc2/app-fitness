import React from 'react';
import {ReactComponent as Search} from "../../images/search.svg";
import {ReactComponent as Home} from "../../images/home.svg";
import BarraLista from '../barraLista';

function NavBarTopo(){

        return ( 
                <div className="navBarTopo">
                    <ul className="barraTopo">
                        <li className="barraTopo__item"><Home className="icone"/></li>
                        <li className="barraTopo__item itemCampo">
                            <div className="campoPesquisa">
                                <input></input>
                                <Search className="icone"/>
                                <div>
                                
                                </div>
                            </div>
                        </li>
                        <li className="barraTopo__item">
                            <div className="fotoPerfil" style={{backgroundImage: `url('https://github.com/alexRicc2.png')`}}></div>
                        </li>
                    </ul>
                    <BarraLista ativo={0}/>
                    
                </div>  
        );
}
 
export default NavBarTopo;