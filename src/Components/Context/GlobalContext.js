import React, { createContext, useReducer } from 'react';
import Reducer from '../Reducer/Reducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: "Cash", amount: -100 },
        { id: 2, text: "Salary", amount: 300 },
        { id: 3, text: "Soap", amount: -100 }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

