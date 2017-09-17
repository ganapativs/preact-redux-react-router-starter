import {h} from 'preact';

export default function (props) {
	return (
		<div className="page page__404">
			<h1>404 Page</h1>
			<p>Looks like you were given a bad link ;-)</p>
			<pre>{ props.location.pathname }</pre>
		</div>
	);
}
