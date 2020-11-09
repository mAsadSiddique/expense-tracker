import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext';
import './AddExpense.css';
// import { initNotification } from '../firebase';

function AddExpense() {
    let { AddExpense } = useContext(GlobalContext);
    const [text, setText] = useState("");
    let [amount, setAmount] = useState();


    const handleAddExpense = ev => {
        ev.preventDefault();
        if (Number(amount) !== 0 || Number(amount) !== -0) {
            const newExpense = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: Number(amount)
            }

            AddExpense(newExpense);
        } else {
            alert("Please Enter a valid Amount...")
        }
    }


    return (
        <div>
            <h3 className="title">Add Transactions</h3>
            <form onSubmit={handleAddExpense}>
                <div className="Form__Group">
                    <label htmlFor="Description">Description (negative-expense, positive-income)</label>
                    <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} id="Description" placeholder="Description..." />
                    <label htmlFor="Transaction" >Transaction</label>
                    <input type="number" value={amount} onChange={(ev) => setAmount(ev.target.value)} id="Transaction" placeholder="Enter Amount..." />
                    <button className="btn">Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddExpense
