import {h} from 'preact'
import Routes from './routes';

import {Provider} from 'preact-redux';
import store from './store';

export default (
	<div id="app-container">
		<Provider store={store}>
			<Routes/>
		</Provider>
	</div>
);
