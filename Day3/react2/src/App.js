import React from 'react';
import Counter from './Counter';
import Counter2 from './Counter2';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Counter />
      <Hello color="deepskyblue" name="김사과" isSpecial />
      <Hello />
      <Counter2 />
    </div>
  );
}

export default App;
