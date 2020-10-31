import React, { useState } from 'react'
import './AddExpense.css';

function AddExpense() {
    const [text, setText] = useState("");
    let [amount, setAmount] = useState(0);
    return (
        <div>
            <h3 className="title">Add Transactions</h3>
            <form>
                <div className="Form__Group">
                    <label htmlFor="Description">Description (negative-expense, positive-income)</label>
                    <input type="text" value={text} onChange={(ev)=>setText(ev.target.value)} id="Description" placeholder="Description..." />
                    <label htmlFor="Transaction" >Transaction</label>
                    <input type="number" value={amount} onChange={(ev)=>setAmount(ev.target.value)} id="Transaction" placeholder="Enter Amount..." />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
