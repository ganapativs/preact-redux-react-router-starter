import {h, Component} from 'preact';
import {connect} from 'preact-redux';
import {fetchAPI} from '../actions/api';
import {Link} from 'react-router-dom';

/**
 * Show API redux fetched from remote url
 * */
class API extends Component {
	componentDidMount() {
		this.props.fetchAPI();
	}

	render({fetching, apiResponse}) {
		return (
			<div>
				<nav>
					<Link to="/">Home</Link>
				</nav>
				{
					fetching
						?
						<div>Fetching...</div>
						:
						<pre>
						<code>
							{JSON.stringify(apiResponse, null, 4)}
						</code>
					</pre>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		apiResponse: state.api.apiResponse,
		fetching: state.api.fetching
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAPI: () => dispatch(fetchAPI())
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(API);
