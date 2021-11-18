import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerSummary = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00ffcc;
  color: #000;
  margin-top: 1rem;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 80%;
  margin: 15px auto;
`;
const ListItem = styled.li`
  margin: 5px 0;
`;

const Summary = ({data}) => {

  // Extract data
  const { brand, year, plan } = data;

  if( brand === "" || year === "" || plan === "" ) return null;

  return(
    <ContainerSummary>
      <h2>Quote Summary:</h2>
      <List>
        <ListItem>Brand: {brand}</ListItem>
        <ListItem>Year: {year}</ListItem>
        <ListItem>Plan: {plan}</ListItem>
      </List>
    </ContainerSummary>
    
  );
}

Summary.propTypes = {
  data: PropTypes.object.isRequired
}

export default Summary;