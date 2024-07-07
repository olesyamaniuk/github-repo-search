// import axios from 'axios';

// export const searchRepositories = (query) => async dispatch => {
//     dispatch({ type: 'SEARCH_REPOSITORIES_REQUEST' });

//     try {
//         const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
//         dispatch({ type: 'SEARCH_REPOSITORIES_SUCCESS', payload: response.data.items });
//     } catch (error) {
//         dispatch({ type: 'SEARCH_REPOSITORIES_FAILURE', payload: error.message });
//     }
// };


import axios from 'axios';

export const searchRepositories = (query) => async dispatch => {
    dispatch({ type: 'SEARCH_REPOSITORIES_REQUEST' });

    try {
        const response = await axios.get(`/api/search?query=${query}`);
        dispatch({ type: 'SEARCH_REPOSITORIES_SUCCESS', payload: response.data.items });
    } catch (error) {
        dispatch({ type: 'SEARCH_REPOSITORIES_FAILURE', payload: error.message });
    }
};
