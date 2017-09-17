import {h, Component} from 'preact';
import {withRouter} from 'react-router-dom';

/**
 * Listen to router url changes
 */
class RouteChangeListener extends Component {
	componentDidMount() {
		const {history} = this.props;

		// Send initially mounted route
		this.sendAnalytics(history.location.pathname);

		history.listen((location) => {
			// Send subsequent route changes
			this.sendAnalytics(location.pathname);
		});
	}

	sendAnalytics(url) {
		window.ga && ga.send('pageview', {dp: url})
	}

	render({children}) {
		return <div>{children}</div>;
	}
}

export default withRouter(RouteChangeListener);
