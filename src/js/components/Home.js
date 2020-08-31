import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
  <form action="">
    <div className="card text-center">
      <div className="card-header">
        <h2>Bank Transfer App</h2>
      </div>
      <div className="card-body">
        <h5 className="card-title">
          Click on any of these buttons to transfer payments
        </h5>
        <p className="card-text">
          This is the fastest and most secure means of money transfer.
        </p>
      </div>
      <div className="card-footer text-muted">
        <div className="my_account">
          <Link to="/myaccounttransfer">
            <button type="button" className="btn btn-secondary btn-lg">
              Recharge My account
            </button>
          </Link>
        </div>

        <div className="other_account">
          <Link to="/othersTransfer">
            <button type="button" className="btn btn-secondary btn-lg">
              Recharge other account
            </button>
          </Link>
        </div>
      </div>
    </div>
  </form>
);

export default Home;
