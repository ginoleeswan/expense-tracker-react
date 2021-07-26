import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer'

//initial state

const initialState = {
    transactions: [
        // {id: 1, text: 'Flower', amount: -200 },
        // {id: 2, text: 'Salary', amount: 3000},
        // {id: 3, text: 'Book', amount: -100 },
        // {id: 4, text: 'Camera', amount: 1500}
    ],
}


// create context
export const GlobalContext = createContext(initialState);

//provier component
export const GlobalProvider = ({ children }) => {

    const STORAGE_KEY = 'MY_DATA'

    // const[state, dispatch] = useReducer(AppReducer, initialState);

    // load data initially
    const [state, dispatch] = useReducer(AppReducer, initialState, (state) => {
        const persistedData = localStorage.getItem(STORAGE_KEY)
        const items = persistedData ? JSON.parse(persistedData) : []
        return { ...state, items }
    })



     // save data on every change
     useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
    }, [state.items])

    //actions

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }


    function addTransaction(transaction) {
        if (!transaction.text || /^\s*$/.test(transaction.text)) return;

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }



    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    );


}