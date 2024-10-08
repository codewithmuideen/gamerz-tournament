import React from 'react';
import Tournament from './Tournament'; // Assuming you want to display tournaments here

const CallOfDuty = () => {
  return (
    <div>
      <p style={{marginLeft:'10px', cursor:'pointer'}}><img src={`${process.env.PUBLIC_URL}/assets/left.png`} alt="Trophy Icon" style={{ height: '20px' }} />Back</p>
      <Tournament />
      {/* Add more content specific to Call of Duty if needed */}
    </div>
  );
};

export default CallOfDuty;
