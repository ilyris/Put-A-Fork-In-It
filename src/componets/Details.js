import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {withRouter, Link} from 'react-router-dom';


const Details = ({match, location}) =>  { 
    const {calories, ingredients, source, image, label} = location.state.recipeArray;
    console.log(ingredients);
    const listItems = ingredients.map( listOfIngredients => <Li>{listOfIngredients.text}</Li>);
    return  (
        <div>
            <StyledLink to="/">Home</StyledLink>
            <H2>Your Dish: {label}</H2>
            <InformationContainer>
                <Image src={image} />
                <Ul>{listItems}</Ul>
            </InformationContainer>

            <p>{calories}</p>
        </div>
        );
}


export default withRouter(Details);


const H2 = styled.h2 `
    font-size: 3rem;
    color: #fff;
    text-align: center;
    margin: 20px 0 30px 0;
`;
const StyledLink = styled(Link) `
    text-decoration: none;
    font-size: 1.6rem;
    margin: 20px 0 0 10px;
    color: #fff;
`;
const InformationContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
`;
const Image = styled.img`
  border-radius: 0;
  width: 700px;
  margin: 0 100px;
`;
const Ul = styled.ul `
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const Li = styled.li `
    list-style: none;
    padding: 10px 0 15px 0;
    font-size: 1.6rem;
    color: #fff;
    border-bottom: 1px solid #d6d6d6;
    letter-spacing: 1px;
`;