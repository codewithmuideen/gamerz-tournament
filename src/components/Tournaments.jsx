import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FaTrophy, FaGamepad } from "react-icons/fa";
// import { BsCalendar, BsPeople, BsCurrencyDollar } from "react-icons/bs";

const tournamentsData = [
  {
    id: 1,
    title: "Call of Duty",
    date: "10 Feb 2023",
    fee: "Free-to-play",
    teamSize: "4v4",
    spots: "10/48",
    prize: "₦10,000",
  },
  {
    id: 2,
    title: "Valorant",
    date: "15 Feb 2023",
    fee: "₦500",
    teamSize: "5v5",
    spots: "12/50",
    prize: "₦15,000",
  },
  {
    id: 3,
    title: "FIFA 22",
    date: "20 Feb 2023",
    fee: "₦300",
    teamSize: "1v1",
    spots: "8/32",
    prize: "₦5,000",
  },
  {
    id: 4,
    title: "PUBG Mobile",
    date: "25 Feb 2023",
    fee: "₦700",
    teamSize: "4v4",
    spots: "16/64",
    prize: "₦20,000",
  },
  {
    id: 5,
    title: "Apex Legends",
    date: "01 Mar 2023",
    fee: "Free-to-play",
    teamSize: "3v3",
    spots: "20/60",
    prize: "₦12,000",
  },
  {
    id: 6,
    title: "Fortnite",
    date: "05 Mar 2023",
    fee: "₦1000",
    teamSize: "Solo",
    spots: "30/100",
    prize: "₦25,000",
  },
];

const Tournaments = () => {
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  // Sorting logic
  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedTournaments = [...tournamentsData].sort((a, b) => {
    if (sortOption === "prize") {
      return parseInt(b.prize.replace(/₦|,/g, "")) - parseInt(a.prize.replace(/₦|,/g, ""));
    }
    return 0;
  });

  // Filter logic (you can expand this later)
  const filteredTournaments = sortedTournaments.filter((tournament) => {
    if (filter === "free") {
      return tournament.fee === "Free-to-play";
    }
    return true;
  });

  return (
    <div className="container" style={{marginTop:'-20px'}}>
      {/* Flexbox container for h2 and dropdowns */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Tournaments</h2>

        <div className="d-flex">
          {/* Sort Dropdown */}
          <div className="me-3">
            <button
              className="btn dropdown-toggle"
              type="button"
              style={{borderRadius:0, backgroundColor:'#1c1c1c', color:'white'}}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by
            </button>
            <ul className="dropdown-menu" aria-labelledby="sortDropdown">
              <li>
                <button className="dropdown-item" onClick={() => handleSort("default")}>
                  Default
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => handleSort("prize")}>
                  Prize
                </button>
              </li>
            </ul>
          </div>

          {/* Filter Dropdown */}
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              style={{marginRight:'8px', borderRadius:0, backgroundColor:'#1c1c1c', color:'white'}}
              type="button"
              id="filterDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >

              Filter
            </button>
            <ul className="dropdown-menu" aria-labelledby="filterDropdown">
              <li>
                <button className="dropdown-item" onClick={() => setFilter("all")}>
                  All
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={() => setFilter("free")}>
                  Free-to-play
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tournament Cards */}
      <div className="row">
        {filteredTournaments.map((tournament) => (
          <div key={tournament.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card text-white h-100" style={{backgroundColor:'#1c1c1c', borderRadius:0}}>
              <img
                src="/assets/top.png"
                className="card-img-top"
                alt={tournament.title}
              />
              <div className="card-body">
                <h5 className="card-title">{tournament.title}</h5>
                <p className="card-text">
  <div className="row">
    {/* First row: Date and Fee */}
    <div className="col-6">
    <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} /> {tournament.date}
    </div>
    <div className="col-6">
    <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} /> {tournament.fee}
    </div>
  </div>

  <div className="row">
    {/* Second row: Team Size and Spots */}
    <div className="col-6">
    <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} /> {tournament.teamSize}
    </div>
    <div className="col-6">
    <img src={`${process.env.PUBLIC_URL}/assets/Calendar.png`} alt="Trophy Icon" style={{ height: '20px' }} />Spots: {tournament.spots}
    </div>
  </div>

  <div className="row">
    {/* Third row: Prize */}
    <div className="col-12">
    <img src={`${process.env.PUBLIC_URL}/assets/Trophy - Icon.png`} alt="Trophy Icon" style={{ height: '20px' }} /> {tournament.prize}
    </div>
  </div>
</p>

              </div>
              <div className="card-footer">
  <div className="d-grid gap-2">
    <button className="btn w-100" style={{borderRadius:0,backgroundColor: '#8BC724',fontWeight:700, border:'none'}}>
    <img src={`${process.env.PUBLIC_URL}/assets/gamepad1.png`} alt="Trophy Icon" style={{ height: '20px' }} />  Join tournament
    </button>
    <button className="btn w-100" style={{borderRadius:0, border:'1px solid white', fontWeight:700, color:'white',backgroundColor: '#1c1c1c'}}> <img src={`${process.env.PUBLIC_URL}/assets/gamepad.png`} alt="Trophy Icon" style={{ height: '20px' }} /> View details</button>
  </div>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
