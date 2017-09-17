import {h} from 'preact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import RouteChangeListener from './pages/helpers/routeChangeListener';
import Home from './pages/Home';
import API from './pages/API';
import Error404 from './pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', {dp: obj.url});

export default () => (
	<Router onChange={ onChange }>
		<RouteChangeListener>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/api" component={API}/>
				<Route component={Error404}/>
			</Switch>
		</RouteChangeListener>
	</Router>
);
