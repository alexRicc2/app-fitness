import React from 'react';
import {ReactComponent as Coracao} from '../../images/favorite.svg';
import {ReactComponent as Comentario} from '../../images/chat.svg';
export default function Post(){
  return (
    <div className="post">
      <img scr="../../images/art.webp" className="post__foto"></img>
      <div className="post__coracao"><Coracao/></div>
      <div className="post__favorites">144 favorites</div>
      <div className="post__comentarios"><Comentario/>comentarios</div>
    </div>
  );
}
