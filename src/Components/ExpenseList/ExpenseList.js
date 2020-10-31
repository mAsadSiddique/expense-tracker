import React, { useContext } from 'react'
import './ExpenseList.css'
import { GlobalContext } from '../Context/GlobalContext'

function ExpenseList() {
    let { transactions } = useContext(GlobalContext);

    return (
        <div className="Expense__List">
            <h3 className="Expense__Heading">Expense List</h3>
            <ul className="Expense__items">

                {transactions.map(transaction => (

                    <li className={transaction.amount < 0 ? "minus" : "Plus"} key={transaction.id}>
                        {transaction.text}
                        <span> {transaction.amount < 0 ? "-": "+"}${Math.abs(transaction.amount)}</span>
                        <button className="Delete__Btn">X</button>
                    </li>
                ))
                }


            </ul >
        </div >
    )
}

export default ExpenseList
