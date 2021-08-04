import React from 'react';
import { ReactComponent as Coracao } from '../../images/favorite.svg';
export default function Post(props) {
  return (
    <div className="post">
      <div className="post__imagem" style={{ backgroundImage: `url("${props.foto}")` }}>

        <div className="post__imagem__coracao"><Coracao /></div>

      </div>
      <div className="post__opcoes">
      <div className="post__opcoes__perfil fotoPerfil" style={{backgroundImage: `url('https://github.com/${props.autor}.png')`}}></div>
      <div className="post__opcoes__favorites">{props.autor}</div>
      
      </div>
    </div>
  );
}
