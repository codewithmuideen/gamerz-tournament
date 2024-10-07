import React from 'react';
//import './Navbar.css'; // Add your custom CSS if needed

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark" style={{ backgroundColor: '#121212'}}>
      <div className="container">
      <a className="navbar-brand" href="/">
  <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="GAMERZ Logo" style={{ height: '40px' }} />
</a>

        <form className="col-12 col-md-7">
        <div style={{ position: 'relative' }}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search tournament, player name or player tag"
      style={{
        borderRadius: '0',
        backgroundColor: '#1c1c1c',
        color: 'white',
        border: 'none',
        outline: 'none',
        paddingLeft: '40px', // Make space for the icon
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Search.png)`, // Path to your image
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '10px center', // Adjust position of the icon
        backgroundSize: '20px 20px', // Size of the icon
      }}
    />
  </div>

        </form>
        <div className="navbar-icons">
  <div className="d-flex align-items-center me-3">
    <img
      src={`${process.env.PUBLIC_URL}/assets/bell.png`} // Path to your amount icon
      alt="Amount Icon"
      className="icon-circle"
    />
    &nbsp;&nbsp;&nbsp;&nbsp;
    <img
      src={`${process.env.PUBLIC_URL}/assets/tokens.png`} // Path to your amount icon
      alt="Amount Icon"
    />
    <span className="ms-0">20,000₦</span>
  </div>
  <div className="d-flex align-items-center user-info">
    <img
      src={`${process.env.PUBLIC_URL}/assets/user.png`} // Path to your user icon
      alt="User Icon"
      className="icon-circle"
    />
    <div className='user-info d-flex flex-column'>
    <span className="ms-2">Akinola Olalekan</span>
    <span 
        className="btn ms-2 mt-0" 
        style={{ backgroundColor: '#388e1f', border: 'none',borderRadius:0,padding:"4px",width:"80px" }} // Custom background color and no border
    >
        Online  <img
      src={`${process.env.PUBLIC_URL}/assets/vector.png`} // Path to your user icon
      alt="User Icon"
    />
    </span>
</div>

  </div>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
