const defaultState = {
	role: null,
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case 'RECOLECTOR':
			return Object.assign({}, state, {
				role: action.role,
			});
		case 'PESADOR':
			return Object.assign({}, state, {
				role: action.role,
			});
		case 'ENFARDADOR':
			return Object.assign({}, state, {
				role: action.role,
			});
		case 'INDETERMINADO':
			return Object.assign({}, state, {
				role: null,
			});
		default:
			return state;
	}
}
