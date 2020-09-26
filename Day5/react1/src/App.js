import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';

const AppBlock = styled.div `
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${ 
    props => props.huge && 
    css`
    width: 10rem;
    height: 10rem;
  `}
`

function App() {
  return ( 
    <div>
      <Circle color="salmon" huge/>
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
          }
        }}>
          <AppBlock>
            <Button>Button</Button>
            <Button color='gray'>Button</Button>
            <Button color='pink'>Button</Button>
          </AppBlock>
        </ThemeProvider>
    </div>
  );
}

export default App;
