import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Search from './components/Search';
import './App.css';
// import { CssBaseline } from '@material-ui/core';
function App() {
    return (
        <Provider store={store}>
            {/* <CssBaseline /> */}
            <div className="container mt-4">
                <Search />
            </div>
        </Provider>
    );
}

export default App;

