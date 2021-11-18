import { useState, Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Price from './components/Price';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
`;
const ContainerForm = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
  @media (max-width: 400px) {
    padding: 1rem;
  }
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

function App() {

  const [ summary, setSummary ] = useState({
    quote: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  });

  const [ spinner, setSpinner ] = useState(false);

  // Extract data
  const { quote, data } = summary;

  return (
    <Container>
      <Header 
        title="Car Insurance Quote"
      />
      <ContainerForm>
        <Form 
          setSummary={setSummary}
          setSpinner={setSpinner}
        />
        { spinner &&
        <Spinner />
        }
        { !spinner &&
        <Fragment>
          <Summary 
            data={data}
          />
          <Price 
            quote={quote}
          />
        </Fragment>
        }
      </ContainerForm>
    </Container>
    
  );
}

export default App;
