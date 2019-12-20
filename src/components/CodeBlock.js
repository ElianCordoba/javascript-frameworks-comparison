import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 1%'
  }
}));

export default function CodeBlock({ code }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" align='center'>{code.name} is ~{code.length} characters</Typography>
      <SyntaxHighlighter language="javascript" showLineNumbers={true}>{code.code}</SyntaxHighlighter>
    </div>
  );
}
