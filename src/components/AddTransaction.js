import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { GlobalContext } from '../context/GlobalState'

export default function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: uuidv4(),
            text: text,
            amount: +amount,
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }


    return (
        <div>

            <h3>Add new transaction</h3>

            <form onSubmit={onSubmit}>

                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>

                <button className="btn">Add transaction</button>

            </form>

        </div>
    )
}
