import React from 'react'
import M from 'materialize-css'

const Recent = () => {

    const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
    };

    let dialogRef = React.createRef();

    React.useEffect(() => {
        // pass ref `Modal` to Materialize to handle those popup anim stuffs :)
        M.Modal.init(dialogRef, options);

        console.log(dialogRef)

        // destroy Modal when component destroy
        // return () => M.Modal.destroy();
    })


    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8">
                    <div className="card recent-ctn">
                        <div className="card-content">
                            <div className="title-ctn">
                                <p className="card-title title">Recently Added: T-30 USA</p>
                                <i className="material-icons">favorite</i>
                            </div>
                            <p className="card-subtitle">12 June 2020</p>
                            <img className="img-model" src={ require('../assets/t-30.png').default } alt="t-30"/>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="card recent-ctn recent-ctn--info">
                        <div className="card-content">
                            <div className="flex-d">
                                <i className="material-icons">label</i>
                                <p>Name: T-30</p>
                            </div>
                            <div className="flex-d">
                                <i className="material-icons">flag</i>
                                <p>Country: USA</p>
                            </div>
                            <div className="flex-d">
                                <i className="material-icons">layers</i>
                                <p>Type: Tank Destroyer</p>
                            </div>
                            <div className="flex-d">
                                <i className="material-icons">add</i>
                                <p>Year of Researve: 1945 - 1950</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* trigger model */}
            {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}
            <a className="btn-floating btn-large waves-effect waves-light red modal-trigger absl-btn" href="#modal1"><i className="material-icons">add</i></a>

            {/* model-1 */}
            {/* <div 
                ref={modal => {
                    dialogRef = modal;
                }}
                id="modal1" className="modal"
            >
                <div className="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div> */}

            {/* model-2 */}
            <div 
                ref={modal => {
                    dialogRef = modal;
                }}
                id="modal1" 
                className="modal bottom-sheet"
            >
                <div className="modal-content">
                <h4>Insert New Tank</h4>
                <p>A bunch of text</p>

                <div className="row">
                    <div className="input-field col s12 m3">
                    <input placeholder="Name of new Tank" id="first_name" type="text" className="validate"/>
                    <label htmlFor="first_name">Name</label>
                    </div>
                    <div className="input-field col s12 m3">
                    <input placeholder="Country of Origin" id="last_name" type="text" className="validate"/>
                    <label htmlFor="last_name">Country</label>
                    </div>
                </div>

                </div>
                <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>

        </div>
    )
}
export default Recent
