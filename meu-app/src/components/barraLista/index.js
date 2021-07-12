import React from 'react';

function BarraLista(props){
    
    const opcoes = [ "Feed", "Training", "Shorts", "Shop", "Favorites"]

    return (
        <ul className="barraLista">
            {
            opcoes.map((nome, index) =>{
                if(index === props.ativo){
                    return(
                        <li className="ativo" key={index}>{nome}</li>
                    )}
                else{
                    return(
                        <li key={index}>{nome}</li>
                    )
                }

            })
            }
             
        </ul>
    ) 
}
export default BarraLista;