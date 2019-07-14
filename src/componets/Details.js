import React from "react";
import styled from "styled-components";
import {withRouter} from 'react-router-dom';


const Details = (props) => {
    console.log(props);
  return <h2>Details Page</h2>;
};

export default withRouter(Details);
