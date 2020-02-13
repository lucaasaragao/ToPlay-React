import React, {Fragment} from 'react';

function TrackingEvents({events}){

  if(!events || events.length === 0) return null;

  return (
    <Fragment>
    <h3 className="titulo2">Últimas Atualizações</h3>
    <ul className="list-group">
  {events.map(item => {
  return (
  <li key={item.descricao} className="list-group-item">
    <span>{item.descricao}</span>
    <span>{item.data} {item.hora}</span>
    <span>{item.cidade}/{item.uf}</span>
    <span>{item.local}</span>
    </li>);
  
  })}
    </ul>
    </Fragment>
  );

}

export default TrackingEvents;


