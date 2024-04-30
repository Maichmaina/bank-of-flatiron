import React, { useState } from 'react';
import './App.css';
import Navigation from './navigation';
import TransactionList from './transactionList';

//Declaring an array of objects
const data = [
  { id: "1", description: "Purchase Token", amount: "100", date: "2024-04-29" },
  { id: "2", description: "Vehicle Fuel", amount: "2000", date: "2024-04-28" },
  { id: "3", description: "Movie", amount: "150", date: "2024-04-27" },
  { id: "4", description: "Food", amount: "300", date: "2024-04-26" },
  { id: "5", description: "Fashion", amount: "250", date: "2024-04-25" },
  { id: "6", description: "Income", amount: "35000", date: "2024-04-24" },
  { id: "7", description: "Rent", amount: "12000", date: "2024-04-23" },
  { id: "8", description: "Drinks", amount: "450", date: "2024-04-22" }
]

function App() {
  const[transactionData, setTransactionData] = useState(data); //Set the state of our transaction data used for displaying table
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(""); //set state of the amount entered on input field
  const [date, setDate] = useState(new Date());

  const handleDate = (newDate) => setDate(newDate)
  const addAmount = (event) => setAmount(event.target.value);
  const addDescription = (event) => setDescription(event.target.value);
 //console.log(date.toISOString());
 const addedTransaction = {
  id: data.length + 1,
  date: date.toISOString().slice(0, 10),
  description: description,
  amount: amount
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    data.push(addedTransaction);
    const newList = [...data]
    //console.log(addedTransaction)
    setTransactionData(newList);
    setDate(new Date())
    setAmount("");
    setDescription("") //Reset the form inputs to empty upon submitting
  }
  //Function that handles search as a callback function
  function handleSearchChange(event) {
    const searchResult = data.filter((transaction) => (
      transaction.description.toLowerCase().includes(event.target.value.toLowerCase())
    ));
    setTransactionData(searchResult); //sets transaction data as the result of search function

  }

  //Function that handles submitting the add transaction form
  return (
    <div className="App">
      <Navigation handleSearch={handleSearchChange} 
        handleSubmit={handleSubmit}
        addAmount={addAmount}
        addDescription={addDescription}
        date={date}
        amount={amount}
        description={description}
        handleDate={handleDate}
      />
      <TransactionList data={transactionData}/>
    </div>
  );
}

export default App;