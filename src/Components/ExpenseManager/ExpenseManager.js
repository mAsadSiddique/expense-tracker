import React, { useContext } from 'react'
import './ExpenseManager.css'
import { GlobalContext } from '../Context/GlobalContext'

function ExpenseManager() {
    const { transactions } = useContext(GlobalContext)

    const Income = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (Number(transactions[i].amount) >= 0) {
                income += transactions[i].amount
            }
        }
        return income;
    }

    const Expense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (Number(transactions[i].amount) < 0) {
                expense += transactions[i].amount
            }
        }
        return expense;
    }

    return (
        <div className="Expense__Manager">
            <div className="Income__Expense">
                <span className="Income">Income </span>
                <span className="Income__Amount">+$ {Income().toFixed(2)}</span>
            </div>
            <div className="Income__Expense">
                <span className="Expense">Expense </span>
                <br />
                <span className="Expense__Amount">-$ {Expense().toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ExpenseManager
