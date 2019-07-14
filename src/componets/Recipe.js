import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Recipe = ({ title, image }) => {
  return (
    <ContentContainer>
      <TitleHeading>{title}</TitleHeading>
      <Image src={image} />
      <ButtonWrapper>
          <Button to="/recipe/details/">Details</Button>
      </ButtonWrapper>
    </ContentContainer>
  );
};

const TitleHeading = styled.h2`
  font-size: 2.4rem;
  letter-spacing: 1px;
  color: #fff;
  padding: 10px 0;
`;

const Image = styled.img`
  width: 80%;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border: 2px solid #d6d6d6;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;
const Button = styled(Link)`
  color: rgba(61, 1, 85, 1);
  font-size: 2rem;
  background-color: #fff;
  margin-left: 50px;
  padding: 10px 15px;
  font-weight: 600;
  letter-spacing: 1px;
`;
export default Recipe;
