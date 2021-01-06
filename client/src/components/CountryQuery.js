import React from 'react'
import useStyles from '../themes/theme'
import { Grid, Button, ListItemAvatar, ListItemIcon, Avatar, ListItem, ListItemText,Dialog, DialogTitle, DialogActions, Divider,}from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';
import FiberIcon from '@material-ui/icons/FiberManualRecord';
import { useLazyQuery, gql } from '@apollo/client';

const GET_TANKS_BY_COUNTRY = gql`
    query getTanksByCountry($countryName: String!) {
        country(name: $countryName) {
            _id
            name
        }
    }
`

export default function CountryQuery() {
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

    const renderData = data && data.country.length !== 0 ? data.country.map(country => (
        <>
            <ListItem key={ country.name } className={ classes.flexCol }>
                <div className={ classes.flex }>
                    <ListItemIcon>
                        <GradeIcon />
                    </ListItemIcon>
                    <ListItemText>ID: <b>{ country._id }</b></ListItemText>
                </div>
                <div className={ classes.flex }>
                    <ListItemIcon>
                        <FiberIcon />
                    </ListItemIcon>
                    <ListItemText>Model: <b>{ country.name }</b></ListItemText>
                </div>
                <Divider className={ classes.lineBreak }/>
            </ListItem>
            <Divider />
        </>
    )) : 
    ( <ListItemText>Sorry! No tank with this Country</ListItemText> )

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
            >
                <DialogTitle id="alert-dialog-title">List of tanks from { countryName }</DialogTitle>
                
                { renderData }

                <DialogActions>
                <Button onClick={ handleClose } variant="contained" color="primary">
                    Got it!
                </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
