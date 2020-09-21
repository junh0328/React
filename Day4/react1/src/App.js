import React from 'react';
import Button from './components/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Button size="large" onClick={() => console.log('클릭됨!')}>Button</Button>
        <Button onMouseMove={() => console.log('마우스가 움직이는 중!')}>Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="gray">Button</Button>
        <Button color="gray">Button</Button>
        <Button size="small" color="gray">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink">Button</Button>
        <Button color="pink">Button</Button>
        <Button size="small" color="pink">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="pink" outline>Button</Button>
        <Button color="pink" outline>Button</Button>
        <Button size="small" color="pink" outline>Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" color="blue" fullWidth>Button</Button>
        <Button color="gray" fullWidth>Button</Button>
        <Button size="small" color="pink" fullWidth>Button</Button>
      </div>
    </div>
  );
}

export default App;
