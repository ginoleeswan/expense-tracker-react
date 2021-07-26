import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text: text,
            amount: +amount,
            date: date
        }

        addTransaction(newTransaction);
        setText('');
        setAmount('');
        setDate('');
    }


    return (
        <div>

            <h3 className="form-title">Add new transaction</h3>

            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount
                        {/* (negative - expense, positive - income) */}
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <div className="form-control">
                    <label htmlFor="date">
                        Date
                        {/* (negative - expense, positive - income) */}
                    </label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        onFocus={(e) => (e.currentTarget.type = "date")}
                        onBlur={(e) => {e.currentTarget.type = "text"; e.currentTarget.focus();}} 
                        placeholder="Enter date..." />
                </div>

                <button className="btn">Add transaction</button>

            </form>

        </div>
    )
}
