import React from 'react';

const useStateWithLocalStorage = (localStorageKey) => {
  const [amountInputed, setAmountInputed] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  const [phoneNumInputed, setPhoneNumInputed] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
  const [selectedBank, setSelectedBank] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, phoneNumInputed);
  }, [phoneNumInputed]);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, amountInputed);
  }, [amountInputed]);

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, selectedBank);
  }, [selectedBank]);


  return [amountInputed, setAmountInputed, phoneNumInputed, setPhoneNumInputed, selectedBank, setSelectedBank];
}

const OthersTransfer = () => {
  const [amountInputed, setAmountInputed] = useStateWithLocalStorage(
    'amountInputedLocalStorage'
  );

  const [phoneNumInputed, setPhoneNumInputed] = useStateWithLocalStorage(
    'phoneNumInputedLocalStorage'
  );

  const [selectedBank, setSelectedBank] = useStateWithLocalStorage(
    'bankSelectedLocalStorage'
  );

  const onChange = event => setAmountInputed(event.target.value);
  const phoneChange = event => setPhoneNumInputed(event.target.value)
  const bankChange = event => setSelectedBank(event.target.value)

 const mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + `${amountInputed}x${phoneNumInputed}x${selectedBank}#`);
  }

  return(
  <div className="">
    <form onSubmit={mySubmitHandler}>
    <div className="">
         <select 
         onClick={bankChange}>
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
    <label htmlFor="formGroupExampleInput">Input amount to send</label>
    <input value={amountInputed} type="number" className="form-control" id="bank" placeholder="Amount" onChange={onChange} />
  </div>

  <div className="form-group">
    <label htmlFor="formGroupExampleInput2">Input Receivers phone number</label>
    <input value={phoneNumInputed} type="number" className="form-control" id="phone" placeholder="phone number" onChange={phoneChange}/>
  </div>

  <div className="">
  <button type="submit" className="btn btn-primary">Recharge</button>
  </div>

</form>
<div className="">
{/* <p>`*${bankKey}*${phoneNum}*${amount}#`</p> */}
  <p>`*${phoneNumInputed}${amountInputed}*${selectedBank}#`</p>
</div>
</div>
  )
};

export default OthersTransfer;