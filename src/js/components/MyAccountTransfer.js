import React from 'react';

const MyAccountTransfers = () => {

  return(
<div className="">
<form>

<div className="">
         <select ref="selectValue" onChange={this.handleChange}>
            <option value="555">United Bank for Africa</option>
            <option value="777">Union Bank</option>
            <option value="444">First Bank </option>
            <option value="333">Access Bank</option>

            <option value="222">Zenith Bank</option>
            <option value="111">First City Monument Bank of Nigeria</option>
            <option value="888">Fidelity Bank of Nigeria </option>
            <option value="999">Guaranty Trust Bank</option>
          </select>
    </div>

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Amount</label>
    <input type="number" className="form-control" id="my-amt" placeholder="Amount"/>
  </div>
  <button>Recharge</button>
</form>

<div className="">
  {/* <p>`*${bankKey}*${amount}#`</p> */}
</div>
</div>
  );
};
export default MyAccountTransfers;