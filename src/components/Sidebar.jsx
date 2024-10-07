import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrophy, faChartLine, faShoppingCart, faGamepad, faLock, faUsers, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar text-white" style={{backgroundColor: '#1c1c1c'}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: '#3b3b3b' }}>
          <a href="/tournaments" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/gamepad.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Tournaments
          </a>
        </li>
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
          <a href="/leaderboards" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/leaderboard.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Leaderboards
          </a>
        </li>
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
          <a href="/token-shop" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/token.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Token Shop
          </a>
        </li>
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
          <a href="/live-betting" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/bet.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Live Betting
          </a>
        </li>
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
          <a href="/content-locker" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/video.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Content Locker
          </a>
        </li>
        <li className="list-group-item text-white d-flex align-items-center" style={{ backgroundColor: 'transparent' }}>
          <a href="/community" className="text-white text-decoration-none d-flex align-items-center">
          <img src={`${process.env.PUBLIC_URL}/assets/community.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Community
          </a>
        </li>
      </ul>
      <button className="btn d-flex  text-white align-items-center" style={{
        borderRadius: '0',
        backgroundColor: '#5F0A07', marginTop:'200px'}}>
      <img src={`${process.env.PUBLIC_URL}/assets/logout.png`} alt="Trophy Icon" style={{ height: '20px', marginRight: '8px' }} /> Log out
      </button>
    </div>
  );
}

export default Sidebar;
