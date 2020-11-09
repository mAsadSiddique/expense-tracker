import React, { useContext } from 'react'
import './ExpenseList.css'
import { GlobalContext } from '../Context/GlobalContext'

function ExpenseList() {
    let { transactions } = useContext(GlobalContext);
    let { DeleteExpense } = useContext(GlobalContext);

    return (
        <div className="Expense__List">
            <h3 className="Expense__Heading">Expense List</h3>
            <ul className="Expense__items">

                {transactions.map(transaction => (

                    <li className={Number(transaction.amount) < 0 ? "minus" : "Plus"} key={transaction.id}>
                        {transaction.text}
                        <span> {Number(transaction.amount) < 0 ? "-" : "+"}${Math.abs(transaction.amount)}</span>
                        <button onClick={() => DeleteExpense(transaction.id)} className="Delete__Btn">X</button>
                    </li>
                ))
                }


            </ul >
        </div >
    )
}

export default ExpenseList
