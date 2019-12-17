import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    position: 'fixed',
    bottom: '0px',
    'background-color': '#556cd670',
    width: '100%',
    paddingLeft: '200px',
    fontSize: '11px'
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Typography variant={'subtitle2'} className={classes.main}>Made by Elian Cordoba | I'm looking for a new job! Contact me <a href="mailto:business.eliancordoba@gmail.com">here</a></Typography>
  )
}