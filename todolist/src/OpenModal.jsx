import React from 'react';
import './OpenModal.css'

const OpenModal = (props) => {

   


    return (
        <>
            <div className="modalCon">
                <textarea rows="6" cols="50" id='textVal' onChange={(e)=>{props.handleChange(e)}}>{props.val}</textarea>
                <div className="all_btn">
                    <button onClick={()=>{props.editValue()}} >Edit Note</button>
                    <button onClick={()=>{props.handleClose()}}>Close</button>
                </div>
            </div>
        </>
    )
}

export default OpenModal