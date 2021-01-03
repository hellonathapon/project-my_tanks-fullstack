import React from 'react'
import M from 'materialize-css'
import { useLazyQuery, gql } from '@apollo/client';

const GET_TANK = gql`
    query getTank($id: String!) {
        tank(id: $id) {
            name
            country
        }
    }
`

const Recent = () => {

    // materialize option for modal pop-up dialog
    const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%",
        preventScrolling: true,
    };

    // register ref
    let dialogGetTank = React.createRef();

    React.useEffect(() => {
        M.Modal.init(dialogGetTank, options);
    })


    const [ id, setId ] = React.useState("5fe57bbd4aaf5f137eae7fa4");


    // const handleInput = (e) => {
    //     e.preventDefault()
    //     setId(e.target.value);
    // }

    // for trigger query on click event
    const [ getTank, { loading, data }] = useLazyQuery(GET_TANK, {
        variables: { id }
    });
    // const { loading, err, data } = useQuery(GET_TANK, {
    //     variables: { id }
    // });

    console.log(data)

    return (
        <div className="container">
            <div className="row">
                {/* pic card */}
                <div className="col s12 m8">
                    <div className="card recent-ctn">
                        <div className="card-content">
                            <div className="title-ctn">
                                <p className="card-title title">Recently Added <h4 className="recent-tank">T-30</h4></p>
                                <i className="material-icons heart">favorite</i>
                            </div>
                            <p className="card-subtitle">12 June 2020</p>
                            <img className="img-model" src={ require('../assets/t-30.png').default } alt="t-30"/>
                        </div>
                    </div>
                </div>

                {/* info card */}
                <div className="col s12 m4 card-info-ctn">
                    <div className="card card-recent-info">
                        <div className="card-recent-info__control">
                            <p>Name </p>
                            <p>Test</p>
                        </div>
                    </div>
                    <div className="card card-recent-info">
                        <div className="card-recent-info__control">
                            <p>Country</p>
                            <p>Test</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fetch specific tank btn trigger */}
            <a className="btn-floating btn-large modal-trigger absl-btn" href="#modalGetTank"><i className="material-icons">add</i></a>

            {/* modal for input specific tank `id` */}
            <div 
                ref={ modal => {
                    dialogGetTank = modal
                }}
                id="modalGetTank" 
                class="modal"
            >
                <div class="modal-content">
                <h4>Fetch Specific Tank</h4>
                <p className="sub-title">You can get tank id by click on any related country icon fields</p>
                {/* <div class="input-field col s12">
                    <i class="material-icons prefix">textsms</i>
                    <input onChange={ handleInput } type="text" id="autocomplete-input" class="autocomplete" />
                    <label for="autocomplete-input">tank id</label>
                </div> */}
                <div class="input-field col s12">
                    <input onChange={ (e) => setId(e.target.value) } data-keyboard="true" id="input-id" type="text" />
                    <label for="input-id">tank Id</label>
                </div>
                </div>
                <div class="modal-footer">
                <a onClick={ () => getTank() } href="#!" class="modal-close teal white-text btn-flat">Fetch</a>
                </div>
            </div>
        </div>
    )
}
export default Recent
