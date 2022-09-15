import React from 'react';
import countStore from '../store/countStore';

function Home() {
  const { num, increase, decrease } = countStore();

  return (
    <div>
      <h1>{num}</h1>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default Home;
