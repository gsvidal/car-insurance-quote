import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Msg = styled.p`
  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const ContainerTextQuote = styled.div`
  padding: .4rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127,224,237);
  margin-top: 1rem;
  position: relative;
`;
const TextQuote = styled.p`
  color: #00838F;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Price = ({quote}) => {

  return(
    quote === 0 
    ? 
    <Msg>Choose brand, year and car insurance plan</Msg> 
    : <ContainerTextQuote>
        <TransitionGroup
          component="p"
          className="price"
        >
          <CSSTransition
            classNames="price"
            key={quote}
            timeout={{enter: 500, exit: 500}}  
          >
            <TextQuote>Total Quote: $ {quote}</TextQuote>
          </CSSTransition>
        </TransitionGroup>
      </ContainerTextQuote>
    );
    
}

export default Price;