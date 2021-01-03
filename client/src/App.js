import React from 'react';
import { Grid, Typography, Avatar, Button, CssBaseline, TextField, Link, Paper } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
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

// custom styles out of the lib. 
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://s2.best-wallpaper.net/wallpaper/1920x1200/1608/World-of-Tanks-PS4-games_1920x1200.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  // instance custome style to be used in this fn()
  const classes = useStyles();

  // states
  const [ id, setId ] = React.useState(null);

  // Apollo fn to make query on btn triger
  const [ getTank, { loading, err, data }] = useLazyQuery(GET_TANK, {
    variables: { id }
  })

  // handle click && form 
  const handleIdInput = (e) => {
    setId(e.target.value);
  }
  const handleTankSubmit = (e) => {
    e.preventDefault();
    getTank() // trigger query here
  }

  console.log(data)
  // conditional reder data
  const rederData = data ? (
    <>
      <h2>{ data.tank.name }</h2>
      <h4>{ data.tank.country }</h4>
    </>
  ) : (
    <p>No Data :)</p>
  )

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={4} md={7} className={classes.image}>
        <div className={classes.paper}>
          <h1>Conditional result goes here</h1>
          { rederData }
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}Hi
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
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
              <Grid item xs>
                <Link href="#" variant="body2">
                  USA
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  USSR
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Germany
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
