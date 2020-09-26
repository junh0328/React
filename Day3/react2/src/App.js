import React from 'react';
import Counter from './Counter';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Counter />
      <Hello color="deepskyblue" name="김사과" isSepcial="true" />
      <Hello color="deeppink" name="김파인" />
      <Counter />
    </div>
  );
}

export default App;
