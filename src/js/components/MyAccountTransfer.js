import React, { useRef } from 'react';
import "./styles.css";

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};


const MyAccountTransfers = () => {
  const [amountInputed, setAmountInputed] = useStateWithLocalStorage(
    'myAmountInputedLocalStorage'
  );
  const [mySelectedBank, setMySelectedBank] = useStateWithLocalStorage(
    'myBankClickedLocalStorage'
  );

  const onAmtChange = event => setAmountInputed(event.target.value);
  const bankChange = event => setMySelectedBank(event.target.value);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + `${amountInputed}x${mySelectedBank}#`);
  }
  const inputRef = useRef(null);
  return(
<div className="">
<form onSubmit={mySubmitHandler}>

<div className="">
         <select onClick={bankChange}>
            <option >Pick a bank here</option>
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

  <div className="">
    <label htmlFor="formGroupExampleInput2"> <b> Input Amount </b> </label>
    <input type="number" className="form-control" id="my-amt" placeholder="Amount" onChange={onAmtChange} value={amountInputed}  ref={inputRef }/>
  </div>
  <div className="">
  <button type="submit" className="btn btn-primary">Recharge</button>
  </div>
</form>

<div className="">
  <p>`${amountInputed}x${mySelectedBank}#`</p>
</div>
</div>
  );
};
export default MyAccountTransfers;