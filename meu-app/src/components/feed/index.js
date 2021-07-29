import React from 'react';

export default function Feed(props){
  return(
    <div className="feed">
      {props.children}
    </div>
  );
}