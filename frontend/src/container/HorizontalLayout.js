/**
 * Horizontal App
 */
import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';

// routes
import Widgets from '../routes/widgets';
import Pages from '../routes/pages';
import AdvanceUIComponents from '../routes/advance-ui-components';
import CalendarComponents from '../routes/calendar';
import ChartsComponents from '../routes/charts';
import FormElements from '../routes/forms';
import Users from '../routes/users';
import Components from '../routes/components';
import Tables from '../routes/tables';
import Icons from '../routes/icons';
import Maps from '../routes/maps';
import DragAndDrop from '../routes/drag-drop';
import Editor from '../routes/editor';
import Ecommerce from '../routes/ecommerce';

// async component
import {
	AsyncDashboardComponent,
	AsyncAboutUsComponent,
	AsyncChatComponent,
	AsyncMailComponent,
	AsyncTodoComponent
} from '../components/AsyncComponent/AsyncComponent';

// horizontal layout
import RctHorizontalLayout from '../components/RctHorizontalLayout';

class RctHorizontalApp extends Component {

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		const { match, location } = this.props;
		if (location.pathname === '/horizontal') {
			return (<Redirect to={'/horizontal/dashboard'} />);
		}
		return (
			<RctHorizontalLayout>
				<Route path={`${match.url}/dashboard`} component={AsyncDashboardComponent} />
				<Route path={`${match.url}/pages`} component={Pages} />
				<Route path={`${match.url}/advanced-component`} component={AdvanceUIComponents} />
				<Route path={`${match.url}/calendar`} component={CalendarComponents} />
				<Route path={`${match.url}/charts`} component={ChartsComponents} />
				<Route path={`${match.url}/about-us`} component={AsyncAboutUsComponent} />
				<Route path={`${match.url}/widgets`} component={Widgets} />
				<Route path={`${match.url}/forms`} component={FormElements} />
				<Route path={`${match.url}/chat`} component={AsyncChatComponent} />
				<Route path={`${match.url}/mail`} component={AsyncMailComponent} />
				<Route path={`${match.url}/todo`} component={AsyncTodoComponent} />
				<Route path={`${match.url}/users`} component={Users} />
				<Route path={`${match.url}/ui-components`} component={Components} />
				<Route path={`${match.url}/tables`} component={Tables} />
				<Route path={`${match.url}/icons`} component={Icons} />
				<Route path={`${match.url}/maps`} component={Maps} />
				<Route path={`${match.url}/drag-andDrop`} component={DragAndDrop} />
				<Route path={`${match.url}/editor`} component={Editor} />
				<Route path={`${match.url}/ecommerce`} component={Ecommerce} />
			</RctHorizontalLayout>
		);
	}
}

export default withRouter(RctHorizontalApp);
