import React from 'react';

const useStateWithLocalStorage = bankLocalStorageKey => {
  const [bankSelected, setBankSelected] = React.useState(
    localStorage.getItem(bankLocalStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(bankLocalStorageKey, bankSelected);
  }, [bankSelected]);

  return [bankSelected, setBankSelected];
}

const OthersTransfer = () => {
  const [bankSelected, setBankSelected] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );

  const onChange = event => setBankSelected(event.target.value);
 const mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + bankSelected);
  }

  return(
  <div className="">
    <form onSubmit={mySubmitHandler}>
    {/* <div className="">
         <select ref="selectValue" onChange={onChange}>
            <option value="555">United Bank for Africa</option>
            <option value="777">Union Bank</option>
            <option value="444">First Bank </option>
            <option value="333">Access Bank</option>

            <option value="222">Zenith Bank</option>
            <option value="111">First City Monument Bank of Nigeria</option>
            <option value="888">Fidelity Bank of Nigeria </option>
            <option value="999">Guaranty Trust Bank</option>
          </select>
    </div> */}

  <div className="form-group">
    <label htmlFor="formGroupExampleInput">Input Amount</label>
    <input value={bankSelected} type="number" className="form-control" id="bank" placeholder="Amount" onChange={onChange} />
  </div>

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Receivers phone number</label>
    {/* <input value={} type="number" className="form-control" id="phone" placeholder="phone number"/> */}
  </div>
  <div className="">
  <button type="submit" className="btn btn-primary">Recharge</button>
  </div>

</form>
<div className="">
{/* <p>`*${bankKey}*${phoneNum}*${amount}#`</p> */}
<p>`*${bankSelected}*$#`</p>
</div>
</div>
  )
}

export default OthersTransfer;