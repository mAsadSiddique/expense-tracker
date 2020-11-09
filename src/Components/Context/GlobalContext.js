import React, { createContext, useReducer } from 'react';
import Reducer from '../Reducer/Reducer';

// Initial State
const initialState = {
    transactions: []
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    // Actions
    function DeleteExpense(id) {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id
        });
    }

    function AddExpense(transaction) {
        dispatch({
            type: "ADD_EXPENSE",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                DeleteExpense,
                AddExpense
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

