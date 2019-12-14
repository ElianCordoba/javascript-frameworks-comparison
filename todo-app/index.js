import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import SideMenu from '../src/components/SideMenu';
import CodeBlock from '../src/components/CodeBlock';
import Result from '../src/components/Result';

import { react, svelte} from './code';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  }
}));

export default function TodoAppExample() {
  const classes = useStyles();

  return (
    <>
      <SideMenu></SideMenu>
      <Result react={react} svelte={svelte}></Result>
      <div className={classes.root}>
        <CodeBlock code={react}></CodeBlock>
        <CodeBlock code={svelte}></CodeBlock>
      </div>
    </>
  );
}
