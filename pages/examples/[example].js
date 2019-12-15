import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Divider, Typography } from '@material-ui/core';
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
  let { example } = router.query;

  const [notes, setNotes] = useState(null);
  const [examples, setExamples] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    async function getExamples() {
      console.log('useEffect example');

      // TODO: Sometimes 'example' is undefined

      // const { notes, examples } = await import(`./${example}/code.js`);
      let notes = null;
      let examples = null;

      console.log('exampoles es ', example);

      if (!example) example = 'count';

      if (example) {
        ({ notes, examples } = await import(`./${example}/code.js`));
        console.log('AHHHH', examples);
      }

      setNotes(notes);
      setExamples(examples);
    }

    getExamples();
  }, []);

  return (
    <>
      <SideMenu></SideMenu>
      {examples && examples.length >= 2 && <Result data={examples}></Result>}
      <div className={classes.root}>
        {examples &&
          examples.map(code => (
            <CodeBlock code={code} key={code.name}></CodeBlock>
          ))}
      </div>
      {notes && (
        <div>
          <Divider />
          <Typography variant="h4">Notes</Typography>
          <Typography variant="h6" dangerouslySetInnerHTML={{__html: notes }} />
        </div>
      )}
    </>
  );
}
