import React, {CSSProperties} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" style = {flexItems}>
        <TextField id="standard-basic" label="Namn" />
        <TextField id="standard-basic" label="Address" />
        <TextField id="standard-basic" label="Postnummer/Stad" />
    </form>
  );
}

const flexItems:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}