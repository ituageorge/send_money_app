import React from 'react';

const OthersTransfer = () => (
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
    <label htmlFor="formGroupExampleInput">Input</label>
    <input type="text" className="form-control" id="bank" placeholder="select bank" />
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Recievers phone number</label>
    <input type="text" className="form-control" id="phone" placeholder="phone number"/>
  </div>
  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Recievers phone number</label>
    <input type="text" className="form-control" id="phone" placeholder="phone number"/>
  </div>
  <button type="submit" className="btn btn-primary">Recharge</button>
</form>
)

export default OthersTransfer;