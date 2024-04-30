import React from "react";
import './App.css';

function Navigation({handleSearch, handleSubmit, addAmount, addDescription, addDate, amount, description}) {
    return (
        <>
        <header>
            <h1>The Royal Bank of Flatiron</h1>
        </header>
        <div className="nav"> 
            <form id="search" action="#">
                <input onChange={handleSearch} type="text" placeholder="Search Your Recent Transaction" />
                <button>
                    <i class="fa fa-search" style={{fontSize:"20px"}}></i>
                </button>
            </form>
        </div>
        <div className="addTransaction">
            <form onSubmit={handleSubmit}>
                <input onChange={addDescription}type="text" value={description} placeholder="Description" />
                <input onChange={addDate} type="number" value={Date} placeholder="Date" />
                <input onChange={addAmount} type="text" value={amount} placeholder="Amount" />
                <button>Add Transaction</button>
            </form>
            
        </div>
        </>
    )
}
export default Navigation;