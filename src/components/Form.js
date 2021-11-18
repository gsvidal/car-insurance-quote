import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getYearDiff, getBrand, getPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  & div {
    margin: 0;
  }
  @media (max-width: 400px) {
    & .inputs {
      flex-direction: column;
      justify-content: center;
    }
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #00838F;
  border-radius: 5px;
  background-color: #fff;
  -webkit-appearance: none;
  &::placeholder {
    color: #aaa;
  }
`;
const Label = styled.label`
  display: inline-block;
  flex: 0 0 120px;
  @media (max-width: 400px) {
    margin-right: 10px;
    flex: 0 0 30px;
  }
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #eee;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  -webkit-appearance: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Button = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color .3s ease;
  &:hover {
    background-color: #26CDDA;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  width: calc( 100% - 2rem);
  text-align: center;
`;

const Form = ({setSummary, setSpinner}) => {

  const [ data, setData ] = useState({
    base: "",
    brand: "",
    year: "",
    plan: ""
  });
  const [ error, setError ] = useState(false);
  const [ errorInput, setErrorInput ] = useState(false);

  // Extract state values
  const { base, brand, year, plan } = data;

  // Read Form data and setData
  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  // when hits submit
  const handleSubmit = event => {
    event.preventDefault();

    if(brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    } else if(base < 1 ){
      setError(false);
      setErrorInput(true);
      return;
    }
    
    setError(false);
    setErrorInput(false);
  
    // base is assigned to price variable
    let price = base;

    // obtain years diff
    const diff = getYearDiff(year);

    // For Each year substract 3%
    price = price * (1 - 0.03*diff);

    // American +15%
    // Asian +5%
    // European +30%
    price = getBrand(brand) * price;

    // Basic + 20%
    // Full + 50%
    price = parseFloat((getPlan(plan) * price).toFixed(2));

    // Setting summary after finish loading
    setSpinner(true);
    setTimeout(() => {
      setSummary({
        quote: price,
        data
      })
      setSpinner(false);
    }, 2000);  
  }

  return(
    <form
      action=""
      onSubmit={handleSubmit}
    >
      { error && 
        <Error>All fields are required !</Error>
      } 
      { errorInput &&
        <Error>Base rate has to be greater than 0 !</Error>
      }
      <Field>
        <Label htmlFor="base">Base Rate($):</Label>
        <Input 
          placeholder="2000"
          type="number"
          name="base" 
          id="base"
          value={base}
          onChange={handleChange}
        />
      </Field>
      <Field>
        <Label htmlFor="brand">Brand:</Label>
        <Select 
          name="brand" 
          id="brand"
          value={brand}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="year">Year:</Label>
        <Select 
          name="year" 
          id="year"
          value={year}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
        </Select>
      </Field>

      <Field>
        <p className="plan-label">Plan:</p>
        <Field className="inputs">
        
        <InputRadio 
          type="radio"
          name="plan"
          id="plan-basic"
          value="Basic"
          checked={plan === "Basic"}
          onChange={handleChange}
        /><Label htmlFor="plan-basic">Basic</Label>
        
        
        <InputRadio 
          type="radio"
          name="plan"
          id="plan-full"
          value="Full"
          checked={plan === "Full"}
          onChange={handleChange}
        /><Label htmlFor="plan-full">Full</Label>
        
        </Field>
      </Field>

      <Button type="submit">Get quote</Button>

    </form>
  );
}

Form.propTypes = {
  setSummary: PropTypes.func.isRequired, 
  setSpinner: PropTypes.func.isRequired
}

export default Form;