import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BudgetCalculator = styled.div `
  display: flex;
  margin: 50px 0;
  width: 800px;
`;

export const CallField = styled.div `
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  width: 25%;

  label {
    margin-bottom: 5px;
  }
  select {
    padding: 0 8px;
    height: 44px;
    border-radius: 4px;
    border: none;
    background-color: #e6fff2;
  }
`;

export const PlanField = styled.div`
  margin-right: 10px;
  width: 25%;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  
  select {
    padding: 0 8px;
    height: 44px;
    border-radius: 4px;
    border: none;
    background-color: #e6fff2;
  }
`;

export const DurationField = styled.div`
  margin-right: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  
  input {
    padding: 0 8px;
    height: 44px;
    border-radius: 4px;
    border: none;
    background-color: #e6fff2;
  }
`;

export const CalculatorActions = styled.div`
  display: flex;
  margin-left: auto;

  button {
    margin-top: auto;
    background-color: #b3ffd9;
    height: 44px;
    width: 130px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #80FFBF;
      transition: 0.5s;
    }
  }
`;

export const BudgetHeader = styled.div `
  background-color: #80ffbf;
  border-bottom: 1px solid darkgray;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  width: 100%;

  h3 {
    width: 16.6%;
    padding: 0 12px;
    font-weight: bold;
  }
`;

export const BudgetList = styled.div `
margin-bottom: 50px;
  width: 800px;
`;

export const BudgetBody = styled.div `
  div:nth-child(even) {
    background-color: #E6FFF2;
  }
`;