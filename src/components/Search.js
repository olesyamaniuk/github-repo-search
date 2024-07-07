import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from '../redux/actions/githubActions';
import { TextField, Button, CircularProgress } from '@mui/material';
import './Search.module.css'

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { repositories, loading, error } = useSelector(state => state.github);

    const handleSearch = () => {
        dispatch(searchRepositories(query));
    };

    return (
        <div>
            <div className="container mb-4">
                <TextField 
                    label="Search Repositories" 
                    variant="outlined" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                />
                <Button className='button'
                    variant="contained" 
                    color="primary" 
                    onClick={handleSearch} 
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : 'Search'}
                </Button>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="list-group">
                {repositories.map(repo => (
                    <li key={repo.id} className="list-group-item">
                    <a href={repo.html_url} className="list-group-item">
                        {repo.name}
                    </a>
                </li>
                ))}
            </div>
        </div>
    );
};

export default Search;