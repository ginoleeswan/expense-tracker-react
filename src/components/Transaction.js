import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export default function Transaction( { transaction } ) {

    const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';



    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} 
            <span className="transaction-date">{transaction.date}</span>
            <span>{sign}R{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}
