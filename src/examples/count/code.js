import { getCodeLength } from '../../../src/utils';

export const examples = [
  {
    name: 'React',
    code: 
    `import React, { useState } from 'react';
        
    export default function Count() {
      const [count, setCount] = useState(0);

      const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);
      const reset = () => setCount(0);

      return (
        <>
          <h1>The count is {count}</h1>

          <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
          <button onClick={increment}>+</button>
        </>
      );
    }`,
    get length() {
      return getCodeLength(this);
    }
  },
  {
    name: 'Svelte',
    code: `
    <script>
      import { writable } from "svelte/store";
    
      const count = writable(0);
    
      const increment = () => count.update(n => n + 1);
      const decrement = () => count.update(n => n - 1);
      const reset = () => count.set(0);
    </script>
    
    <h1>The count is {$count}</h1>
    
    <button on:click={decrement}>-</button>
    <button on:click={reset}>reset</button>
    <button on:click={increment}>+</button>
    `,
    get length() {
      return getCodeLength(this);
    }
  }
];
