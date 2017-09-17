const actionTypes = {
	API_FETCH: 'API_FETCH',
	API_FULFILLED: 'API_FULFILLED'
};

export function fetchAPI() {
	return function (dispatch) {
		dispatch({type: actionTypes.API_FETCH});

		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(resp => resp.json())
			.then(apiResponse => {
				dispatch({type: actionTypes.API_FULFILLED, payload: apiResponse});
			})
			.catch(err => console.error(err));
	}
}
