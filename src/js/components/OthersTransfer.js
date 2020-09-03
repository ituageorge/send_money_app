import React from 'react';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import domProps from './BankData.json';
import './styles.css';

const useStateWithLocalStorage = (localStorageKey) => {
  const [amountInputed, setAmountInputed] = React.useState(
    localStorage.getItem(localStorageKey) || '',
  );
  const [phoneNumInputed, setPhoneNumInputed] = React.useState(
    localStorage.getItem(localStorageKey) || '',
  );
  const [selectedBank, setSelectedBank] = React.useState(
    localStorage.getItem(localStorageKey) || '',
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

  return [
    amountInputed,
    setAmountInputed,
    phoneNumInputed,
    setPhoneNumInputed,
    selectedBank,
    setSelectedBank,
  ];
};

const OthersTransfer = () => {
  const [amountInputed, setAmountInputed] = useStateWithLocalStorage(
    'amountInputedLocalStorage',
  );

  const [phoneNumInputed, setPhoneNumInputed] = useStateWithLocalStorage(
    'phoneNumInputedLocalStorage',
  );

  const [selectedBank, setSelectedBank] = useStateWithLocalStorage(
    'bankSelectedLocalStorage',
  );

  const onChange = (event) => setAmountInputed(event.target.value);
  const phoneChange = (event) => setPhoneNumInputed(event.target.value);
  const bankChange = (event) => setSelectedBank(event.target.value);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    // alert("You are submitting " + `${amountInputed}x${phoneNumInputed}x${selectedBank}#`);
  };

  return (
    <form onSubmit={mySubmitHandler}>
      <div className="card text-center">
        <div className="card-header">Transferred coded money</div>
        <div className="card-body">
          <div className="form-group row" onClick={bankChange}>
            <label className="label" htmlFor="">
              {' '}
              <b> Pick a Bank : </b>
            </label>{' '}
            <div className="px-2 input">
              <select className="form-control lg ">
                {domProps.map((e, key) => {
                  return (
                    <option key={key}
                     defaultValue={e.code}
                     >
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="label" htmlFor="formGroupExampleInput">
              <b> Amount : </b>
            </label>{' '}
            <div className="lg px-2 input" onChange={onChange}>
              <input
                defaultValue={amountInputed}
                type="number"
                className="form-control"
                id="bank"
                placeholder="Amount"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="label" htmlFor="formGroupExampleInput2">
              <b> Phone number : </b>
            </label>
            <div className="lg px-2 input love" onChange={phoneChange}>
              <PhoneInput
                // containerClass=" input"
                // inputClass="input"
                country={'nigeria'}
                defaultValue={phoneNumInputed}
                // containerClass="my-1"
                inputClass="py-2"
                // className="form-control"
                // searchClass="input"
                // containerStyle="input"
                // dropdownStyle="input"
                // dropdownClass="input"
              />
            </div>
          </div>
        </div>

        <div className="card-footer">
          
          <div className="py-2" data-toggle="modal" data-target="#exampleModal">
            <button type="submit" className="btn btn-secondary">
              Recharge
            </button>
          </div>

          <div className="back py-2">
          <Link to="/">
            <button className="btn btn-secondary">
              back
            </button>
          </Link>
        </div>
        </div>

        

      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Transferred code
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>
                "You just submitted " + ${phoneNumInputed}
                {amountInputed}
                {selectedBank}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Dial
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default OthersTransfer;
