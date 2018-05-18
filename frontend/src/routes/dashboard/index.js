/**
 * Dashboard
 */
import React from 'react';

// page title bar
import PageTitleBar from '../../components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from '../../util/IntlMessages';

const Dashboard = ({ match }) => (
	<div className="dashboard-v1">
		<PageTitleBar title={<IntlMessages id="sidebar.dashboard" />} match={match} />
		<div className="container">
			<div className="row">
				<h2>Hey Buddy</h2>
				<p>Welcome on board.</p>
			</div>
		</div>
	</div>
);

export default Dashboard;