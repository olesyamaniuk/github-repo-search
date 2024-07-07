const initialState = {
    repositories: [],
    loading: false,
    error: null,
};

const githubReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_REPOSITORIES_REQUEST':
            return { ...state, loading: true };
        case 'SEARCH_REPOSITORIES_SUCCESS':
            return { ...state, loading: false, repositories: action.payload };
        case 'SEARCH_REPOSITORIES_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default githubReducer;
