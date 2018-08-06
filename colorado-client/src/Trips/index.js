import React from 'react';


const Trips = (props) => {
  const tripList = props.trips.map((trip, i ) => {
    console.log(trip, ' trip id')
    return (
      <li key={trip._id}>
        <h1>{trip.title}</h1><br/>
        <small>{trip.description}</small><br/>
        <button onClick={props.deleteTrip.bind(null, trip._id)}>Delete</button>
        <button onClick={props.showModal.bind(null, trip._id)}>Edit</button>
    </li>)
  })

  return (
    <ul>
      {tripList}
    </ul>
    )

};


export default Trips;