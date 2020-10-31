import React from 'react'
import './AddExpense.css';

function AddExpense() {
    return (
        <div>
            <h3 className="title">Add Transactions</h3>
            <form>
                <div className="Form__Group">
                    <label for="Description">Description (negative-expense, positive-income)</label>
                    <input type="text" id="Description" placeholder="Description..." />
                    <label for="Transaction" >Transaction</label>
                    <input type="number" id="Transaction" placeholder="Enter Amount..."/>
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
