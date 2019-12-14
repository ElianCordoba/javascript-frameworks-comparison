import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SideMenu from '../src/components/SideMenu';

const useStyles = makeStyles(() => ({
  content: {
    marginTop: '80px',
    textAlign: 'center'
  }
}));

export default function Index() {
  const classes = useStyles();

  return (
    <Container>
      <SideMenu></SideMenu>
      <div className={classes.content}>
        <Typography variant="h4" component="h1" gutterBottom>
          Goal of this project
        </Typography>
      </div>
    </Container>
  );
}
