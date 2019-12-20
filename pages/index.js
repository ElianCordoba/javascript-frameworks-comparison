import { Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import SideMenu from '../src/components/SideMenu';

const useStyles = makeStyles(() => ({
  dividerMargin: {
    margin: '50px 0'
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <SideMenu>
      <div className={classes.content}>
        <Typography variant="h4" align={'center'} gutterBottom>
          Goal of this project
        </Typography>

        <Typography variant="body1" gutterBottom>
          Since there are so many options when it comes to picking a web
          framework I decided to create this site to compare one of the things
          that matters the most, the actual code that you will be writing.
        </Typography>

        <Typography variant="body1" gutterBottom>
          You shouldn't pick a framework/library by just the syntax, it should
          be one of the factors along with side performance, ecosystem,
          documentation, etc.
        </Typography>

        <Divider className={classes.dividerMargin} />

        <Typography variant="h4" align={'center'} gutterBottom>
          Contributing
        </Typography>

        <Typography variant="body1" gutterBottom>
          To add a new example you just have to create a js file with the name of the example in the `src/examples` folder, with the following format:
        </Typography>

        <Divider className={classes.dividerMargin} />

        <SyntaxHighlighter language="javascript">
          {
`import { CodeExample } from '../utils';

export const examples = [
  new CodeExample(
    'React',
    '// Some React code'
  ),
  new CodeExample(
    'Vue',
    '// Some Vue code'
  )
];

// Optional:
export const notes = 'This code was take from..... || This example shows.....';`}
        </SyntaxHighlighter>

        <Divider className={classes.dividerMargin} />

        <Typography variant="body1" gutterBottom>
          Then, just add the name of the example to the `examplesList` array in `SideMenu.js`.
        </Typography>
      </div>
    </SideMenu>
  );
}
