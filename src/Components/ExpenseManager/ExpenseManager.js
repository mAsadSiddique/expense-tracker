import React, { useContext } from 'react'
import './ExpenseManager.css'
import { GlobalContext } from '../Context/GlobalContext'

function ExpenseManager() {
    const { transaction } = useContext(GlobalContext)

    return (
        <div className="Expense__Manager">
            <div className="Income__Expense">
                <span className="Income">Income </span>
                <span className="Income__Amount">+$ 0.00</span>
            </div>
            <div className="Income__Expense">
                <span className="Expense">Expense </span>
                <br />
                <span className="Expense__Amount">-$ 0.00</span>
            </div>
        </div>
    )
}

export default ExpenseManager
