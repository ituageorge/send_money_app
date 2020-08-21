import React from "react";
import { Link } from 'react-router-dom';
// import OthersTransfer from "./OthersTransfer";
// import MyAccountTransfer from "./MyAccountTransfer"


const Home = () => (
  <form action="">
<div className="">
  <h2>Click on any of these buttons to transfer payments</h2>
</div>
  <div className="">
  <Link to="/myaccounttransfer">
    <div className="">
      <button type="button" className="btn btn-primary btn-lg">Recharge My account</button>
    </div>
  </Link>
  <Link to="/othersTransfer">
    <div className="">
      <button type="button" className="btn btn-secondary btn-lg">Recharge other account</button>
    </div>
  </Link>
  </div>
  </form>
)

export default Home;
