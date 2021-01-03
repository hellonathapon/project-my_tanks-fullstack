import { makeStyles } from '@material-ui/core/styles';

// custom styles out of the lib. 
const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://s2.best-wallpaper.net/wallpaper/1920x1200/1608/World-of-Tanks-PS4-games_1920x1200.jpg)',
      backgroundRepeat: 'no-repeat',
      // backgroundColor:
      //   theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    flex: {
        display: 'flex',  
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
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
    headText: {
      color: 'white',
      fontSize: '28px',
    },
    card: {
      maxWidth: 500,
      background: 'rgba(255,255,255, 0.7)',
      backdropFilter: 'blur(6px)',
    },
    media: {
      height: 140,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    flagBtn: {
      background: 'pink',
      color: 'white',
    },
    headText: {
        color: 'white',
        fontSize: '28px',
    },
    card: {
        maxWidth: 500,
        background: 'rgba(255,255,255, 0.7)',
        backdropFilter: 'blur(6px)',
    },
    media: {
        height: 140,
    },
    flag: {
        width: 50,
        height: 50,
        cursor: 'pointer',
    }
}));

export default useStyles