import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearDiff, getBrand, getPlan } from '../helper';

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
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
    brand: "",
    year: "",
    plan: ""
  });
  const [ error, setError ] = useState(false);

  // Extract state values
  const { brand, year, plan } = data;

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
    }
    setError(false);

    // base price: 2000
    let price = 2167;

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

    // Total
    setSpinner(true);
    setTimeout(() => {
      setSummary({
        quote: price,
        data
      })
      setSpinner(false);
    }, 1500);
    

    
  }

  return(
    <form
      action=""
      onSubmit={handleSubmit}
    >
      { error && 
      <Error>All fields are required !</Error>
      } 
      <Field>
        <Label htmlFor="">Brand</Label>
        <Select 
          name="brand" 
          id=""
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
        <Label htmlFor="">Year</Label>
        <Select 
          name="year" 
          id=""
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
        </Select>
      </Field>

      <Field>
        <Label htmlFor="">Plan</Label>
        <InputRadio 
          type="radio"
          name="plan"
          value="Basic"
          checked={plan === "Basic"}
          onChange={handleChange}
        />Basic
        <InputRadio 
          type="radio"
          name="plan"
          value="Full"
          checked={plan === "Full"}
          onChange={handleChange}
        />Full
      </Field>

      <Button type="submit">Get quote</Button>

    </form>
  );
}

export default Form;