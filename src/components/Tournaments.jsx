import React from 'react';
//import './Tournaments.css';

const Tournaments = () => {
  const tournaments = [
    { title: 'Call of Duty', date: '10 Feb 2023', entryFee: 'Free-to-play', prize: '₦10,000', players: '10/48' },
    // Add more tournament data
  ];

  return (
    <div className="tournaments-container">
      <h2>Tournaments</h2>
      <div className="row">
        {tournaments.map((tournament, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <img src="warzone.jpg" className="card-img-top" alt="Call of Duty" />
              <div className="card-body">
                <h5 className="card-title">{tournament.title}</h5>
                <p className="card-text">{tournament.date}</p>
                <p className="card-text">{tournament.entryFee}</p>
                <p className="card-text">{tournament.players}</p>
                <p className="card-text">{tournament.prize}</p>
                <button className="btn btn-success">Join Tournament</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;
