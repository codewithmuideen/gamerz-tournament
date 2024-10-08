import React from 'react';

const Profile2 = () => {
  return (
    <div 
      className="profile2-section d-flex justify-content-between align-items-start p-3" 
      style={{ 
        marginTop: '-40px', 
        backgroundColor: '#121212', 
        width: '100%',
        gap: '1rem' // Adds gap between the cards
      }}
    >
      {/* First Card */}
      <div 
        className="profile-card text-white p-4 d-flex justify-content-between align-items-center" 
        style={{ flex: '1', backgroundColor: '#1c1c1c', borderRadius:0, marginLeft:'-16px'}}
      >
        <div>
        <h3>Continue playing</h3>
        <p>Start or resume tournaments you <br /> have registered for.</p>
        <button className="btn text-white" style={{ fontWeight:900}}><img src={`${process.env.PUBLIC_URL}/assets/play.png`} alt="Trophy Icon" style={{ height: '20px'}} />Continue Playing</button>
        </div>
        <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/valorant.png`}
          alt="Profile Icon"
          style={{ maxWidth: '150px', height: 'auto', borderRadius: '8px' }}
        />
        </div>
      </div>
      <div 
        className="profile-card text-white p-4 d-flex justify-content-between align-items-center" 
        style={{ flex: '1',  backgroundColor: '#1c1c1c', borderRadius:0, marginLeft: '-15px'}}
      >

        {/* second */}
        <div className='mleft'>
        <h3>Quick match</h3>
        <p>Create a tournament and invite <br /> friends to play.</p>
        <button className="btn text-white" style={{ fontWeight:900}}><img src={`${process.env.PUBLIC_URL}/assets/play.png`}alt="Trophy Icon" style={{ height: '20px' }} />Let's Go</button>
        </div>
        <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/valorant.png`}
          alt="Profile Icon"
          style={{ maxWidth: '150px', height: 'auto', borderRadius: '8px' }}
        />
        </div>
      </div>
    </div>
  );
}

export default Profile2;
