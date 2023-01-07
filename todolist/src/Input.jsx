import React, { useEffect, useState } from 'react'
import "./input.css"
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import OpenModal from './OpenModal';


const Input = () => {

    const [inputData, setInputData] = useState("");
    const [showData, setShowData] = useState([])
    const [Filtered, setFiltered] = useState(showData);
    const [open, setOpen] = useState(false);
    const [val, setVal] = useState("");
    const [ids, setIds] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        setInputData(value);
    }

    const handleClick = () => {
        if(inputData === ""){
            alert("error")
        }else{
            setShowData((oldValue) => [...oldValue, inputData]);
            setInputData("")
        }

    }

    useEffect(() =>{
        let x = new Set(showData)
        setFiltered([...x])
    }, [showData])


    const handleDelete = (index) => {
        setFiltered(Filtered.filter((val, i) => {
            return i !== index;
        }))
    }

    const openModal = (index) => {
        showData.map((val, i) => {
            if (i === index) {
                setVal(val)
                setIds(index);
            }
            return 0;
        })

        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const editValue = () => {
        setFiltered(Filtered.map((val, index) => {
            if (index === ids) {
                return inputData;
            } else {
                return val;
            }
        })
        )
        setOpen(false)
    }

    return (
        <>
            <div className="block2">
                <form>
                    <input className='if' type="text" onChange={handleChange} value={inputData} name="name" placeholder="What's in your mind" /> <NoteAddIcon onClick={handleClick} />
                </form>
            </div>
            <br />
            <br />
            <div className="tdi">
                {
                    Filtered.map((val, index) => {
                        return <div className="note" key={index} >
                            <h1>{val}</h1>
                            <div className="icons">
                                <EditIcon onClick={() => { openModal(index) }} />
                                <DeleteForeverIcon onClick={() => { handleDelete(index) }} />
                            </div>
                        </div>
                    })
                }

                {open && <OpenModal inputData={inputData} handleChange={handleChange} handleClose={handleClose} val={val} editValue={editValue} />}
            </div>
        </>
    )
}

export default Input