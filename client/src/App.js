import React from 'react';
import { Grid, Typography, Avatar, Button, CssBaseline, TextField, Paper,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core'
import InfoPanel from './components/InfoPanel';
import ByCountry from './components/ByCountry';
import useStyles from './themes/theme' // make use custom style out of the `MD` default
import { useLazyQuery, gql } from '@apollo/client';

// init Apollo query
const GET_TANK = gql`
  query getTank($id: String!) {
    tank(id: $id) {
      name
      country
    }
  }
`

export default function App() {
  // instanciate custome style as `classes`
  const classes = useStyles();

  // define local states
  const [ id, setId ] = React.useState(null);
  

  // Apollo triggering fn.
  const [ getTank, { loading, err, data }] = useLazyQuery(GET_TANK, {
    variables: { id }
  })

  // handle click && form 
  const handleIdInput = (e) => {
    setId(e.target.value);
  }
  const handleTankSubmit = (e) => {
    e.preventDefault();
    getTank() // trigger Apollo query here
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <InfoPanel data={ data }/>

      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
          <Avatar className={classes.large}>
            Hi
          </Avatar>

          <Typography component="h1" variant="h5">
            Let's get Tank Captain
          </Typography>
          
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Tank ID"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={ handleIdInput }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={ handleTankSubmit }
            >
              Roll Out
            </Button>
            <Grid container>
              <ByCountry />
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
