import React, { useState } from 'react';
import TrackingEvents from './components/TrackingEvents';

function App() {

  const [events, setEvents] = useState([]);
  console.log(events);


  const submitHandler = (event) => {
    event.preventDefault(); //prevendo que o form action não envie o evento para uma URL
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch('http://localhost:3001/?tracking=' + data.tracking) // `http://localhost:3001/?tracking=${data.tracking}`
      .then(response => response.json())
      .then(data =>{
        const events = data.events || [];
        setEvents(events);
      })
      .then(console.error);
    
  };

  return (
    <div className="container">
      <h1>React Tracking</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input type="text" name="tracking" className="form-control"/> 
        </div>
        <button type="submit" value="Track" className="btn btn-primary">Pesquisar</button>
      </form>

      <TrackingEvents events={events}/>




    </div>
  );
}

export default App;
