import thunk from 'redux-thunk';
import {createStore, applyMiddleware, componse} from 'redux';
import reducer from './reducers';

// Redux devtools configuration
// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		}) : compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
