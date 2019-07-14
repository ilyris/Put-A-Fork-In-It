import React from 'react';
import styled from 'styled-components';


const SearchBox = ({submitUsersRecipe, searchChange}) => {
    return(
        <SearchBoxWrapper>
            <InputSearchField type="search" placeholder="search recipe" onChange={searchChange}></InputSearchField>
            <SubmitButton onClick={submitUsersRecipe}>Search</SubmitButton>
        </SearchBoxWrapper>

    );
}

const SearchBoxWrapper = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled.button `
    font-size: 2em;
    color: white;
    padding: 10px 15px;
    text-align: center;
    letter-spacing: 2px;
    background-color: #000;
    border: none;
    outline: none;
    margin-left: 20px;
    border-radius: 10px;
`;

const InputSearchField = styled.input `
    height: 100%;
    font-size: 1.8em;
    padding: 10px;
    border: none;
    outline: none;
    background-color: rgba(0,0,0,0);
    border-bottom: 3px solid #fff;
    color: #fff;
    padding-left: 0;
`;

export default SearchBox;