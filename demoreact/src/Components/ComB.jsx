import React from 'react';
import style from "./ComB.module.css";
import ComC from './ComC';


const ComB = () => {
    return (
        <>
            <div className={style.parent}>ComB</div>
            <div className={style.child}>aaaaa</div>
            <ComC />
        </>
    )
}

export default ComB