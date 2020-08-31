import React, { useRef } from 'react';
import bankData from './BankData.json';

import './styles.css';

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || '',
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

const MyAccountTransfers = () => {
  const [amountInputed, setAmountInputed] = useStateWithLocalStorage(
    'myAmountInputedLocalStorage',
  );
  const [mySelectedBank, setMySelectedBank] = useStateWithLocalStorage(
    'myBankClickedLocalStorage',
  );

  const onAmtChange = (event) => setAmountInputed(event.target.value);
  const bankChange = (event) => setMySelectedBank(event.target.value);

  const mySubmitHandler = (event) => {
    event.preventDefault();
    // alert("You are submitting " + `${amountInputed}x${mySelectedBank}#`);
  };
  const inputRef = useRef(null);
  return (
    <div className="">
      <form onSubmit={mySubmitHandler}>
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
                  "You just submitted " + ${amountInputed}
                  {mySelectedBank}
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
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card text-center">
          <div className="card-header">Transferred Code</div>
          <div className="card-body">
            <div className="">
              <select onClick={bankChange}>
                {bankData.map((e, key) => {
                  return (
                    <option key={key} value={e.code}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="">
              <label htmlFor="formGroupExampleInput2">
                {' '}
                <b> Input Amount </b>{' '}
              </label>
              <input
                type="number"
                className="form-control"
                id="my-amt"
                placeholder="Amount"
                onChange={onAmtChange}
                value={amountInputed}
                ref={inputRef}
              />
            </div>
          </div>

          <div
            className="card-footer text-muted"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <button type="submit" className="btn btn-primary">
              Recharge
            </button>
          </div>
        </div>
      </form>

      <div className="">
        <p>
          `${amountInputed}
          {mySelectedBank}`
        </p>
      </div>
    </div>
  );
};
export default MyAccountTransfers;
