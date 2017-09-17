import {h} from 'preact';
import {Link} from 'react-router-dom';

export default function (props) {
	return (
		<div className="page page__home">
			<h1>Welcome</h1>
			<p>This is the home page.</p>

			<p>You should check out:</p>
			<nav>
				<div>
					<Link to="/api">API</Link>
				</div>
				<div>
					<Link to="/foo">Foo</Link>
				</div>
			</nav>

			<h2>Features:</h2>
			<ul>
				<li>Offline Caching (via `serviceWorker`)</li>
				<li>Stylus & Autoprefixer</li>
				<li>Asset Versioning (aka "cache-busting")</li>
				<li>babel-env (Automatically use required babel plugins to support ES6 & ES7 on latest browsers), babel-stage-0 (Latest features) &
					babel-sitrep support
				</li>
				<li>Hot Module Replacement (HMR) for all files</li>
				<li>Preact Developer Tools</li>
			</ul>
		</div>
	);
}
