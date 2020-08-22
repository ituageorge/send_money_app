import React from "react";
import { Link } from 'react-router-dom';
import "./styles.css";


const Home = () => (
  <form action="">
    <div className="">
      <h2>Bank Transfer App</h2>
    </div>
<div className="">
  <h4>Click on any of these buttons to transfer payments</h4>
</div>
  <div className="the_buttons">
    <div className="my_account">
  <Link to="/myaccounttransfer">
      <button type="button" className="btn btn-primary btn-lg">Recharge My account</button>
  </Link>
    </div>

 <div className="other_account">
  <Link to="/othersTransfer">
    {/* <div className=""> */}
      <button type="button" className="btn btn-secondary btn-lg">Recharge other account</button>
    {/* </div> */}
  </Link>
  </div>
  </div>
  </form>
)

export default Home;
