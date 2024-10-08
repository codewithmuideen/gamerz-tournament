import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Tournament.css"; // Optional CSS for additional styling

const Tournament = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("/tournamentData.json")
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data.leaderboard))
      .catch((error) => console.error("Error fetching the tournament data:", error));
  }, []);

  return (
    <div className="container my-5">
      {/* Image and Tournament Details */}
      <div className="row">
        <div className="col-12">
        <div className="card border-0">
            <img
              src="/assets/image 1.jpg"
              alt="Call of Duty"
              className="card-img-top"
              style={{ height: 'auto', width: '100%', borderRadius: '0px' }}
            />
          </div>
        </div>
        <div className="col-12 mt-4">
          <h2 className="fw-bold">Call of Duty</h2>
          <div style={{margin:'8px 0px'}}>
              <span style={{borderRadius:'20px', padding:'6px',backgroundColor:'#242424'}}>🏆 N10,000</span>
            </div>
          <p className="text-secondary mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Tournament Information */}
          <div className="d-flex text-white my-3" style={{ gap: '16px' }}>
            <div>
              <span>  <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} />10 Feb 2023</span>
            </div>
            <div>
              <span> <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} />Free-to-play</span>
            </div>
            <div>
              <span>  <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} />4v4</span>
            </div>
            <div>
              <span> <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} />10/48</span>
            </div>
          </div>

          <button className="btn btn-success btn-lg" style={{borderRadius:0, border:'none',backgroundColor:'#8BCF2F', fontWeight:800, color:'black'}}><img src={`${process.env.PUBLIC_URL}/assets/gamepad1.png`} alt="Trophy Icon" style={{ height: '20px' }} /> Join Tournament</button>
        </div>
      </div>

      {/* Tournament Information (Leaderboard and Fixtures) */}
      <div className="row mt-5">
        <div className="col-12">
          <h4 className="fw-bold">Tournament Information</h4>
          <ul className="nav nav-tabs" id="tournamentTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="leaderboard-tab"
                data-bs-toggle="tab"
                data-bs-target="#leaderboard"
                type="button"
                role="tab"
                aria-controls="leaderboard"
                aria-selected="true"
                style={{border:'none', borderRadius:0, backgroundColor:'#3b3b3b', color:'white'}}
              >
                Leaderboard
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="fixtures-tab"
                data-bs-toggle="tab"
                data-bs-target="#fixtures"
                type="button"
                role="tab"
                aria-controls="fixtures"
                aria-selected="false"
                style={{borderBottom:'1px solid white', borderRadius:0, backgroundColor:'#141414', color:'white'}}
              >
                Fixtures
              </button>
            </li>
          </ul>

           {/* Leaderboard Table */}
           <div className="tab-content mt-4" id="tournamentTabsContent">
            <div
              className="tab-pane fade show active"
              id="leaderboard"
              role="tabpanel"
              aria-labelledby="leaderboard-tab"
            >
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Placement</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Player</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Games Played</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Wins</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Losses</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>W/L Ratio</th>
                    <th scope="col" style={{backgroundColor:'#141414'}}>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.length > 0 ? (
                    leaderboardData.map((player, index) => (
                      <tr key={index}>
                        <td>{player.placement}</td>
                        <td>{player.player}</td>
                        <td>{player.gamesPlayed}</td>
                        <td>{player.wins}</td>
                        <td>{player.losses}</td>
                        <td>{player.winLossRatio}</td>
                        <td>{player.points}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" >Loading...</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="tab-pane fade"
              id="fixtures"
              role="tabpanel"
              aria-labelledby="fixtures-tab"
            >
              <p>Fixtures content goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
