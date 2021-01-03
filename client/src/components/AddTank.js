import React from 'react'
import M from 'materialize-css'

const AddTank = () => {

    // materialize option for modal pop-up dialog
    const options = {
        inDuration: 250,
        outDuration: 250,
        opacity: 0.5,
        dismissible: false,
        startingTop: "4%",
        endingTop: "10%"
    };

    // register ref
    let dialogRef = React.createRef();

    React.useEffect(() => {
        M.Modal.init(dialogRef, options);
    })


    return (
        <div>
            {/* Trigger floating btn */}
            {/* <a className="btn-floating btn-large waves-effect waves-light red modal-trigger absl-btn" href="#modal1"><i className="material-icons">add</i></a> */}

            {/* Modal for Add new Tank  */}
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
                    <input id="first_name" type="text" className="validate"/>
                    <label htmlFor="first_name">Name</label>
                    </div>
                    <div className="input-field col s12 m3">
                    <input id="last_name" type="text" className="validate"/>
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
export default AddTank
