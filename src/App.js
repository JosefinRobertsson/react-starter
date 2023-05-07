import React from 'react';
import styled from 'styled-components';
import Endpoints from './components/Endpoints';

const AllWrapper = styled.div`
height: 90vh;
width: 80vw;
display: flex;
flex-direction: column;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
padding: 1rem;
border-radius: 1rem;
border: 1px solid black;
@media screen and (min-width: 667px) {
  width: 70vw;
  padding: 2rem;
}
@media screen and (min-width: 1024px) {
  width: 40vw;
}
`
export const App = () => {
  return (
    <AllWrapper>
      <Endpoints />
    </AllWrapper>
  );
};
