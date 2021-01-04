import React from 'react'
import useStyles from '../themes/theme'
import { Grid, Button, ListItem, ListItemText,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core'
import { useLazyQuery, gql } from '@apollo/client';

const GET_TANKS_BY_COUNTRY = gql`
    query getTanksByCountry($countryName: String!) {
        country(name: $countryName) {
            _id
            name
        }
    }
`

export default function ByCountry() {
    const classes = useStyles();

    const [ countryName, setCountryName ] = React.useState(null);
    const [ open, setOpen ] = React.useState(false);
    const [ flagIcon, setFlagIcon ] = React.useState([
        { title: 'USA', imgUrl: require('../assets/countries/united-states.svg').default },
        { title: 'Germany', imgUrl: require('../assets/countries/germany.svg').default },
        { title: 'USSR', imgUrl: require('../assets/countries/russia.svg').default },
        { title: 'UK', imgUrl: require('../assets/countries/united-kingdom.svg').default },
        { title: 'France', imgUrl: require('../assets/countries/france.svg').default },
        { title: 'Italy', imgUrl: require('../assets/countries/italy.svg').default },
    ]);

    const [ triggerQuery, { loading, err, data } ] = useLazyQuery(GET_TANKS_BY_COUNTRY, {
        variables: { countryName }
    })

    // fn
    const handleOpen = (e) => {
        setOpen(true);
        setCountryName(e.target.alt)
        triggerQuery(); // trigger query
    }
    const handleClose = () => {
        setOpen(false);
    }

    console.log(data)

    const renderData = data ? data.country.map(country => (
        <ListItem key={ country.name } className={ classes.flexCol }>
            <ListItemText>ID: <b>{ country._id }</b></ListItemText>
            <ListItemText>Model: <b>{ country.name }</b></ListItemText>
        </ListItem>
    )) : 
    ( <p>Wait Umm smth went wrong i can feel it!</p> )

    return (
        <>
            <Grid item xs className={ classes.flex }>
                { flagIcon.map(icon => (
                  <div onClick={ handleOpen } className={ classes.flag } key={ icon.title }>
                    <img src={ icon.imgUrl } alt={ icon.title }/>
                  </div>
                )) }
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{ countryName }</DialogTitle>
                
                { renderData }

                <DialogActions>
                <Button onClick={ handleClose } color="primary">
                    Got it!
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
