import React from "react";
import './App.css';
 
function TransactionList({data}) {
    
    return(
        <>
        <div className="transactionList">
            <table>
                <thead>
                    <tr>
                        <th key="date">Date</th>
                        <th key="description">Description</th>
                        <th key="amount">Amount</th>
                    </tr>
                
                </thead>
                <tbody>
                    {data.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td> 
                            <td>{transaction.description}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        </>
    )
}

export default TransactionList;