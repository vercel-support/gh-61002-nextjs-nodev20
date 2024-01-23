'use client';

import { useState } from 'react';

export const Test = () => {
  const [x, setX] = useState(0);

  return (
    <div>
      <div>Test: {x}</div>
      <button onClick={() => setX(x + 1)}>click</button>
    </div>
  );
};
