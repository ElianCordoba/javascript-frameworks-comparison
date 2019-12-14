import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles(() => ({
  root: {
    width: '48%',
    margin: '0 1%'
  }
}));

export default function CodeBlock({ code }) {
  const classes = useStyles();

  const parsedExample = parseCode(code);

  const codeLength = parsedExample.code.split('').length;

  return (
    <div className={classes.root}>
      <Typography variant="h6" align='center'>~{codeLength} characters</Typography>
      <SyntaxHighlighter language="javascript">{parsedExample.code}</SyntaxHighlighter>
    </div>
  );
}

/**
 tal vez hacer que el object que se importa tenga un gettter asi es mas facil saber el length
 
  export default examples = [
    {
      name: 'svelte',
      code: 'asdasdasd',
      length: function() {
        return this.code.split('').length
      }
    }
  ]


 */

// mover a util
function parseCode(example) {
  const name = Object.keys(example)[0];

  return {
    name,
    code: example[name]
  }
}