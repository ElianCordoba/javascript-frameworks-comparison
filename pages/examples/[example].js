import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { makeStyles } from '@material-ui/core/styles';

import SideMenu from '../../src/components/SideMenu';
import CodeBlock from '../../src/components/CodeBlock';
import Result from '../../src/components/Result';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}));

export default function ExamplePage() {
  const router = useRouter();

  const [notes, setNotes] = useState(null);
  const [examples, setExamples] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    async function getExamples() {
      const { example } = router.query;
      const { notes, examples } = await import(`./${example}/code.js`);

      setNotes(notes);
      setExamples(examples);
    }

    getExamples();
  }, []);

  return (
    <>
      <SideMenu></SideMenu>
      {/* {examples && examples.length >= 2 && <Result data={examples}></Result>} */}
      {/* <div className={classes.root}>
        {examples && examples.map(code => <CodeBlock code={code}></CodeBlock>)}
        <h1>{notes}</h1>
      </div> */}
    </>
  );
}
