import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Msg = styled.p`
  background-color: rgb(127,224,237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const Msg2 = styled.p`
  background-color: #26C6DA30;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
  color: grey;
  & p {
    font-size: .75rem;
  }
  & li {
    font-size: .5rem;
  }
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
    : 
    <Fragment>
      <ContainerTextQuote>
        <TransitionGroup
          className="price"
        >
          <CSSTransition
            classNames="price"
            key={quote}
            timeout={{enter: 500, exit: 500}}  
          >
            <TextQuote>Total Quote: $ {quote} per year</TextQuote>

          </CSSTransition>
        </TransitionGroup>
        
      </ContainerTextQuote>
      <Msg2>
        <p>Increments over base rate:</p>
        <p>Brand rate: </p>
        <ul>
          <li>American + 15%</li> 
          <li>European + 15%</li> 
          <li>Asian + 15%</li> 
        </ul>
        <p>Year rate: </p>
        <ul>
          <li>+ 3% each year relative to current year</li> 
        </ul>
        <p>Plan rate: </p>
        <ul>
          <li>Basic + 20%</li> 
          <li>Full + 50%</li> 
        </ul>
        <p>*Accumulative increments</p>
      </Msg2>
      </Fragment>
    );
    
}

Price.propTypes = {
  quote: PropTypes.number.isRequired
}

export default Price;