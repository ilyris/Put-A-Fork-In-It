import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Recipe = ({ title, image, recipeArray }, props) => {
  return (
    <ContentContainer>
      <TitleHeading>{title}</TitleHeading>
      <Image src={image} />
      <ButtonWrapper>
          <Button to={{ pathname: `/${recipeArray.label}`,
          state: {recipeArray}}}>Details</Button>
      </ButtonWrapper>
    </ContentContainer>
  );
};

const TitleHeading = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px 0;
  text-transform: capitalize;
  text-align: center;
  width: 100%;
  background: #673AB7;
`;

const Image = styled.img`
  width: 100%;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #d6d6d6;
  margin-top: 20px;
  width: 30%;
  min-width: 300px;
  min-height: 400px;
  background-color: #d6d6d6;
  box-shadow: 0px 14px 20px 6px #515151
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;
const Button = styled(Link)`
  color: #000;
  font-size: 2rem;
  background-color: rgb(46, 206, 255);
  color: #fff;
  margin-right: 50px;
  padding: 10px 15px;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  box-shadow: 1px 2px 5px 2px #3a3a3a80;
`;

export default Recipe;
