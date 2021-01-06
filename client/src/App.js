import React from 'react';
import { Grid, Typography, Avatar, Button, CssBaseline, TextField, Paper, Snackbar } from '@material-ui/core'
import InfoPanel from './components/InfoPanel';
import CountryQuery from './components/CountryQuery';
import useStyles from './themes/theme' // make use custom style out of the `MD` default variants
import { gql, useApolloClient  } from '@apollo/client';

// init Apollo query
const GET_TANK = gql`
  query getTank($id: String!) {
    tank(id: $id) {
      _id
      name
      country
      desc
      type
    }
  }
`

export default function App() {

  const classes = useStyles();
  const client = useApolloClient();

  // local states
  const [ id, setId ] = React.useState(null);
  const [ data, setData ] = React.useState(null);
  const [ openSnackbar, setOpenSnackbar ] = React.useState(false);
  const [ errSnackbarMessage, setErrSnackbarMessage ] = React.useState(null);

  /**
   * NOTE: `useLazyQuery` automatically fires when component re-renderd which is the consequences of local
   * state change. So replaced it with `useApolloClient` hook to manually trigger query.
   */
  const handleTankSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await client.query({
        query: GET_TANK,
        variables: { id },
      });
      setData(res.data);

    }catch(err) {
      // just in case incorrect || invalid `ID`
      console.log(err.message)
      setOpenSnackbar(true);
      setErrSnackbarMessage(err.message)
    }
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
            Let's get Tank, Captain
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
              onChange={ (e) =>  setId(e.target.value) }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.customBtn}
              onClick={ handleTankSubmit }
            >
              Fetch
            </Button>
            <p>Select any of these Nations to get specific tank ID</p>
            <Grid container>
              <CountryQuery />
            </Grid>

          </form>
        </div>
      </Grid>

      {/* ============= snackbar for healthy UX ======== */}
      <Snackbar
        message={ errSnackbarMessage }
        open={openSnackbar}
        onClose={() => setTimeout(() => setOpenSnackbar(false), 2000)}
      />
    </Grid>
  );
}
