import React, { useState, useEffect } from 'react';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  const [searchDescription, setSearchDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.json())
      .then((data) => {
        setExpenses([...expenses, data]);
        setInputData({
          date: '',
          description: '',
          category: '',
          amount: '',
        });
      })
      .catch((error) => console.error('Error adding expense:', error));
  };

  const handleSearch = () => {
    fetch(`http://localhost:8001/transactions?description_like=${searchDescription}`)
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error searching data:', error));
  };

  const handleDeleteExpense = (index) => {
    const expenseToDelete = expenses[index];
    fetch(`http://localhost:8001/transactions/${expenseToDelete.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedExpenses = [...expenses];
        updatedExpenses.splice(index, 1);
        setExpenses(updatedExpenses);
      })
      .catch((error) => console.error('Error deleting expense:', error));
  };

  return (
    <div className='wholepage'>
      <h1 className='title'>Expense Tracker</h1>
      <div className='search'>
        <label>Search by Description:</label>
        <input
          type="text"
          value={searchDescription}
          onChange={(e) => setSearchDescription(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <button onClick={() => handleDeleteExpense(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='inputs'>
        <div>
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={inputData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={inputData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={inputData.category}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            name="amount"
            value={inputData.amount}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
    </div>
  );
};

export default ExpenseTracker;
