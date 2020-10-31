import React from 'react'
import './ExpenseList.css'

function ExpenseList() {
    return (
        <div className="Expense__List">
            <h3 className="Expense__Heading">Expense List</h3>
            <ul className="Expense__items">
                <li className="list">
                    Soda
                    <span className="Amount"> +$100</span>
                    <button className="Delete__Btn">X</button>
                </li>
            </ul>
        </div>
    )
}

export default ExpenseList
