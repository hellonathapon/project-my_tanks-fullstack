import React from 'react'
import M from 'materialize-css'
import { useQuery, gql } from '@apollo/client';

// dynamic country name
const GET_TANKS_BY_COUNTRY = gql`
    query getTanksByCountry($countryName: String!) {
        country(name: $countryName) {
            _id
            name
        }
    }
`

const Hello = () => {

    // init local states
    const [ icons, setIcons ] = React.useState([
        { title: 'Germany', iconUrl: require('../assets/countries/germany.svg').default },
        { title: 'USA', iconUrl: require('../assets/countries/united-states.svg').default },
        { title: 'UK', iconUrl: require('../assets/countries/united-kingdom.svg').default },
        { title: 'France', iconUrl: require('../assets/countries/france.svg').default },
        { title: 'USSR', iconUrl: require('../assets/countries/russia.svg').default },
    ]);
    
    // dynamic country name
    const [ countryName, setCountryName ] = React.useState('Germany')

    // apollo
    const { loading, err, data } = useQuery(GET_TANKS_BY_COUNTRY, {
        variables: { countryName }
    });

    // if (loading) return console.log('Loading...')
    // if (err) return console.log('Error :(');

    console.log(data)

    // change state on click
    const handleClickIcon = (e) => {
        // console.log(e.target.alt)
        setCountryName(e.target.alt)
    } 

    // create refs
    var dialogRef = React.createRef();

    // Materializecss dialog options
    const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
    };

    React.useEffect(() => {
        M.Modal.init(dialogRef, options);
    })

    // conditional render list :)
    const rederList = data ? 
        data.country.map(tank => (
            <li key={ tank._id } className="collection-item">
                <span className="sub-title">id: { tank._id }</span><br />
                <span className="title">{ tank.name }</span>
            </li>
        )) :
        ( <p>Don't worry just No Data :)</p> )

    return (
        <div className="container">
            <div className="row">

                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Available Country</span>
                                <div className="country-icon-ctn">
                                    { icons.map(icon => (
                                        <figure onClick={ handleClickIcon } className="country-icon" key={ icon.title }>
                                            <a className="modal-trigger" href="#modal2"><img src={ icon.iconUrl} alt={ icon.title }/></a>   
                                        </figure>
                                    )) }    
                                </div> 
                        </div>
                    </div>
                </div>

                {/* Tanks by Country Dialog model */}
                <div 
                    ref={ Modal => {
                        dialogRef = Modal
                    }}
                    id="modal2" 
                    className="modal modal-fixed-footer"
                >
                    <div className="modal-content">
                    <h4>{ countryName }</h4>
                    <p>{ countryName } is Allied country on WWII, German engineers indeed know to make good tanks :)</p>
                    </div>
                        <ul className="collection">
                            { rederList }
                        </ul>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Hello
