/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from '../RctPageLoader/RctPageLoader';

// dashboard
const AsyncDashboardAdminComponent = Loadable({
	loader: () => import("../../routes/dashboard"),
	loading: () => <RctPageLoader />,
});

const AsyncDashboardComponent = Loadable({
	loader: () => import("../../modules/admin/components/dashboard"),
	loading: () => <RctPageLoader />,
});

export {
	AsyncDashboardComponent
};
