import React from 'react';
//import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-section d-flex justify-content-between align-items-start p-4" style={{ marginTop: '-20px', width: '98.8%', backgroundColor: '#1c1c1c' }}>
      {/* Profile Card */}
      <div className="profile-card text-white p-4 me-3" style={{ flex: '1', backgroundColor: '#1c1c1c' }}>
        <h3>Setup your profile</h3>
        <p>Complete your profile to get access to tournaments and other features.</p>
        <button className="btn" style={{backgroundColor: '#8BC724', borderRadius:0}}> <img src={`${process.env.PUBLIC_URL}/assets/user.png`} alt="Trophy Icon" style={{ height: '20px' }} />Complete Profile</button>
      </div>

      {/* Profile Image */}
      <div className='' style={{backgroundColor: '#1c1c1c'}}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/valorant.png`}
          alt="Profile Icon"
          style={{ maxWidth: '150px', height: 'auto', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}

export default Profile;
