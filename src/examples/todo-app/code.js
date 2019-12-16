import { getCodeLength } from '../../../src/utils';

export const examples = [
  {
    name: 'React',
    code: 
`import React, { useState, useMemo } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { done: false, text: 'eat' },
    { done: false, text: 'sleep' },
    { done: false, text: 'code' },
    { done: false, text: 'repeat' }
  ]);

  function toggleDone(t) {
    setTodos(
      todos.map(todo => {
        if (todo === t) {
          return {
            done: !t.done,
            text: t.text
          };
        }
        return todo;
      })
    );
  }

  const [hideDone, setHideDone] = useState(false);

  function toggleHideDone() {
    setHideDone(!hideDone);
  }

  const filtered = useMemo(
    () => (
      hideDone 
        ? todos.filter(todo => !todo.done) 
        : todos
      ),
    [todos, hideDone]
  );

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={hideDone}
          onChange={toggleHideDone}
        ></input>
        hide done
      </label>

      <ul>
        {filtered.map((todo, index) => (
          <li 
            onClick={() => toggleDone(todo)} 
            key={index}
          >
            {todo.done ? '👍' : ''} {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}`,
    get length() {
      return getCodeLength(this);
    }
  },
  {
    name: 'Svelte',
    code: 
`<script>
  let todos = [
    { done: false, text: 'eat' },
    { done: false, text: 'sleep' },
    { done: false, text: 'code' },
    { done: false, text: 'repeat' }
  ];

  function toggleDone(t) {
    todos = todos.map(todo => {
      if (todo === t) {
        return { 
          done: !t.done, 
          text: t.text
        };
      }

      return todo;
    });
  }

  let hideDone = false;

  $: filtered = hideDone
    ? todos.filter(todo => !todo.done)
    : todos;
</script>

<label>
  <input
    type="checkbox"
    bind:checked={hideDone}
  >

  hide done
</label>

<ul>
  {#each filtered as todo}
    <li on:click={() => toggleDone(todo)}>
      {todo.done ? '👍' : ''} {todo.text}
    </li>
  {/each}
</ul>`,
    get length() {
      return getCodeLength(this);
    }
  }
];

export const notes = `Code take from <a href="https://youtu.be/AdNJ3fydeao?t=940">this</a> presentation by Svelte creator, <a href="https://twitter.com/Rich_Harris">Rich Harris</a>`;
