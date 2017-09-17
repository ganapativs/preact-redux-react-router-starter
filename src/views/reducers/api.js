const initialState = {fetching: true, apiResponse: null};

export default function (state = initialState, action = {}) {
	switch (action.type) {
		case 'API_FETCH':
			return {
				apiResponse: null,
				fetching: true
			};
		case 'API_FULFILLED':
			return {
				apiResponse: action.payload,
				fetching: false
			};
		default:
			return state;
	}
}
