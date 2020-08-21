import React from 'react';

const MyAccountTransfers = () => (

<form>
<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select bank
  </button>
  <div className="dropdown-menu dropdown-menu-right">
    <button className="dropdown-item" type="button">United Bank for Africa</button>
    <button className="dropdown-item" type="button">First Bank of Nigeria</button>
    <button className="dropdown-item" type="button">Union Bank</button>
    <button className="dropdown-item" type="button">Access Bank</button>
    <button className="dropdown-item" type="button">Zenith Bank</button>
    <button className="dropdown-item" type="button">First City Monument Bank of Nigeria</button>
    <button className="dropdown-item" type="button">Fidelity Bank of Nigeria</button>
    <button className="dropdown-item" type="button">Guaranty Trust Bank</button>

  </div>
</div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Amount</label>
    <input type="text" className="form-control" id="my-amt" placeholder="Amount"/>
  </div>
  <button>Recharge</button>
</form>

)
export default MyAccountTransfers;