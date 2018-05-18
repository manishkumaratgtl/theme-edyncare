/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// app default layout
import RctAppLayout from '../../../components/RctAppLayout';

// async component
import {
  AsyncDashboardComponent
} from '../../../components/AsyncComponent/AsyncComponent';

class MainApp extends Component {
  render() {
    const { match } = this.props;
    return (
      <RctAppLayout>
        <Route path={`${match.url}/dashboard`} component={AsyncDashboardComponent} />
      </RctAppLayout>
    );
  }
}

export default withRouter(connect(null)(MainApp));

// import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';

// import CarerIndividual from '../components/carers/carer_individual';
// import CarersList from '../components/carers/carer_list';
// import ClientIndividual from '../components/clients/client_individual';
// import ClientList from '../components/clients/client_list';
// import Dashboard from '../components/dashboard';
// import Interviews from '../components/carers/interviews';
// import SignedContracts from '../components/contracts/signed_contracts';


// export default class AdminPortalPreWrap extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path='/portal-admin' component={Dashboard} />
//         <Route path='/portal-admin/carers' component={CarersList} />
//         <Route path='/portal-admin/carer/:id' component={CarerIndividual} />
//         <Route path='/portal-admin/carers/interviews' component={Interviews} />
//         <Route path='/portal-admin/clients/' component={ClientList} />
//         <Route path='/portal-admin/client/:id' component={ClientIndividual} />
//         <Route path='/portal-admin/contracts/signed-contracts' component={SignedContracts} />
//       </Switch>
//     );
//   }
// }
