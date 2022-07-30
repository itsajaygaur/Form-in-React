import React from 'react'
import './Form.css'

const Form = (props) => {

    return (
        <div className="container">
            <h3>Receipt Details</h3>
            <form action=''>
                <div className='form-apply'>
                    <div className='form-control'>
                        <label
                            htmlFor='date'
                            className='required'>
                            Date
                        </label>
                        <input
                            type="date"
                            placeholder='Enter Date'
                            name='date'
                            id='date'
                            value={props.date}
                            onChange={(e) => props.dateChange(e)}
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label
                            htmlFor='amount'
                            className='required'>
                            Amount
                        </label>
                        <input
                            inputMode='numeric'
                            placeholder='Enter Amount (in INR)'
                            name='amount'
                            value={props.amount}
                            onChange={(e) => props.amountChange(e)}
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label
                            htmlFor='payment-mode'
                            className='required'>
                            Payment Mode
                        </label>
                        <select
                            name='payment-mode'
                            id='payment-mode'
                            value={props.paymentMode}
                            onChange={(e) => props.paymentModeChange(e)}
                            required
                        >
                            <option value='cash'> Cash </option>
                            <option value='online'> Online </option>
                        </select>
                    </div>
                    <div className='form-control'>
                        <label
                            htmlFor='remark'>
                            Remark
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Remark'
                            name='remark'
                            value={props.remark}
                            onChange={(e) => props.remarkChange(e)}
                        />
                    </div>
                </div>
                <div className='button-container'>
                    <button className='cancel-btn'>CANCEL</button>
                    <button
                        type='submit'
                        className='submit-btn'
                        onClick={(e) => props.handleSubmit(e)}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
