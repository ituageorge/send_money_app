import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../js/components/Home';
import MyAccountTransfers from "../js/components/MyAccountTransfer";
import NotFoundPage from "../js/components/NotFoundPage";
import OthersTransfer from "../js/components/OthersTransfer";


const AppRouter = () => (
    <Router>
      <div className="main-content">
        <Switch>
         
          {/* <Route component={MyAccountTransfers} path="/myaccounttransfer" /> */}
          <Route path="/myaccounttransfer" component={props => <MyAccountTransfers />} />
          {/* <Route component={OthersTransfer} path="/otherstransfer" /> */}
          {/* <Route path="/othersTransfer" component={props => <OthersTransfer {...props} />} /> */}
          <Route path="/othersTransfer">
            <OthersTransfer />
          </Route>
          {/* <Route component={RechargeAcct} path="/rechargeacct" /> */}
          <Route path="/rechargeacct" component={props => <RechargeAcct {...props} />} />
          <Route component={Home} path="/" exact={true} />
          {/* <Route path="/" component={props => <Home {...props} />} /> */}
          <Route component={NotFoundPage} />
          {/* <Route component={props => <NotFoundPage {...props} />} /> */}
          
        </Switch>
    </div>
  </Router>
);

export default AppRouter
