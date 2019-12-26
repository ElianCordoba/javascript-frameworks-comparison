import { Frameworks, CodeExample } from '../utils';

export const examples = [
  new CodeExample(
    Frameworks.React,
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
}`
  ),

  new CodeExample(
    Frameworks.Svelte,
    `<script>
  import { writable } from "svelte/store";

  const count = writable(0);

  const increment = () => count.update(n => n + 1);
  const decrement = () => count.update(n => n - 1);
  const reset = () => count.set(0);
</script>

<h1>The count is {$count}</h1>

<button on:click={decrement}>-</button>
<button on:click={reset}>reset</button>
<button on:click={increment}>+</button>`
  ),

  new CodeExample(
    Frameworks.Vue,
    `<template>
  <div>
    <h1>The count is {{count}}</h1>

    <button @click="decrement">-</button>
    <button @click="reset">reset</button>
    <button @click="increment">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return { count: 0 };
    },
    methods: {
      increment() {
        this.count += 1;
      },
      decrement() {
        this.count -= 1;
      },
      reset() {
        this.count = 0;
      }
    }
  };
</script>`
  ),

  new CodeExample(Frameworks.Angular, 
`import { Component } from "@angular/core";

@Component({
  selector: "counter",
  template: '
    <h1>The count is {{ count }}</h1>

    <button (click)="decrement()">-</button>
    <button (click)="reset()">reset</button>
    <button (click)="increment()">+</button>
  '
});

class Counter {
  count = 0;

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }
}`)
];
