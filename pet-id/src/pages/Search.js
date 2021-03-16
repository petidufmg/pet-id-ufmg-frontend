import React from 'react';
import CustomTypography from '../components/CustomTypography.js';
import CustomSearchForm from '../components/CustomSearchForm.js';
import { useHistory } from 'react-router-dom';

function Search() {

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        history.push('/pet-info');
    }

    return (
        <div>
            <CustomTypography/>
            <CustomSearchForm handleSubmit={handleSubmit}/>
        </div>
    );
}

export default Search;