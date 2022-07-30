import React from 'react'
import './Table.css'
const Table = (props) => {
    return (
        <div className='table-container'>
            <h3> Date: <span> {props.date}</span></h3>
            <h3> Amount: <span>₹ {props.amount}</span></h3>
            <h3> Payment Mode: <span>{props.paymentMode}</span></h3>
            <h3> Remark: <span>{props.remark}</span></h3>
        </div>
    )
}

export default Table
