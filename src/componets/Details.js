import React from "react";
import styled from "styled-components";
import {withRouter, Link} from 'react-router-dom';


const Details = ({match}) => console.log(match) || (
        <div>
            <H2>ID: {match.params.id}</H2>
            <StyledLink to="/">Home</StyledLink>
        </div>

    )

export default withRouter(Details);


const H2 = styled.h2 `
    font-size: 30px;
    color: #fff;
    text-align: center;
`;
const StyledLink = styled(Link) `
    text-decoration: none;
    font-size: 1.8rem;
    color: #fff;
`;