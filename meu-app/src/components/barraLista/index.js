import React from 'react';

function BarraLista(props){
    
    const opcoes = [ "Feed", "Training", "Shorts", "Shop", "Favorites"]

    return (
        <ul className="barraLista">
            {
            opcoes.map((nome, index) =>{
                if(index === props.ativo){
                    return(
                        <li className="ativo">{nome}</li>
                    )}
                else{
                    return(
                        <li>{nome}</li>
                    )
                }

            })
            }
             
        </ul>
    ) 
}
export default BarraLista;