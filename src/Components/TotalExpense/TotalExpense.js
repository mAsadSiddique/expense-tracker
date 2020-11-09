import React, { useContext } from 'react'
import './TotalExpense.css'
import { GlobalContext } from '../Context/GlobalContext'

function TotalExpense() {

    const { transactions } = useContext(GlobalContext);
    // console.log(transactions);

    const totalExpense = () => {
        var expense = 0;
        for (let key = 0; key < transactions.length; key++) {
            expense = expense + Number(transactions[key].amount)
            console.log(expense)
        }
        return expense;
    }

    return (
        <div className="total__expense">
            <span className="total__amount">
                Total Amount
            </span>
            <span className="total__amount">$ {totalExpense().toFixed(2)}</span>
        </div>
    )
}

export default TotalExpense
