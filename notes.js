/* for search bar and filter
function ChangeItUp() {
  function handleChange(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={handleChange}
        placeholder="Enter search term..."
      />

      <select name="filter" onChange={handleChange}>
        <option value="all">Select a filter...</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
} */

/*function SearchItUp() {
    function handleChange(event) {
      console.log(`${event.target.name}: ${event.target.value}`);
    }
  
    return (
      <div>
        <input type="text" name="search" onChange={handleChange} placeholder="Search"
        />
  
        <select name="filter" onChange={handleChange}>
          <option value="all">Select a filter...</option>
          <option value="category">Category</option>
          <option value="description">Description</option>
        </select>
      </div>
    );
  }

  export default SearchItUp;*/

  /*for table and input
  import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, inputData]);
    setInputData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default ExpenseTracker;*/

/*for search input and table
import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  const [searchDate, setSearchDate] = useState('');
  const [sortField, setSortField] = useState(null);

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, inputData]);
    setInputData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  const handleSearch = () => {
    // Filter expenses based on the searchDate
    const filteredExpenses = expenses.filter((expense) =>
      expense.date.includes(searchDate)
    );
    setExpenses(filteredExpenses);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <label>Search by Date:</label>
        <input
          type="text"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default ExpenseTracker;*/

/*
import React, { useState, useEffect } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    // Send a POST request to add a new expense to the server
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
    // Filter expenses based on the searchDate
    fetch(`http://localhost:8001/transactions?date_like=${searchDate}`)
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error searching data:', error));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <label>Search by Date:</label>
        <input
          type="text"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  );
};

export default ExpenseTracker;
*/

/* everything with out delete and sort
import React, { useState, useEffect } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [inputData, setInputData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });
  const [searchDate, setSearchDate] = useState('');

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddExpense = () => {
    // Send a POST request to add a new expense to the server
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
    // Filter expenses based on the searchDate
    fetch(`http://localhost:8001/transactions?date_like=${searchDate}`)
      .then((response) => response.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error searching data:', error));
  };

  return (
    <div className='wholepage'>
      <h1 className='title'>Expense Tracker</h1>
      <div className='search'>
        <label>Search by Date:</label>
        <input
          type="text"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
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
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.date}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
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
      <div >
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={inputData.description}
          onChange={handleInputChange}
        />
      </div>
      <div >
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={inputData.category}
          onChange={handleInputChange}
        />
      </div>
      <div >
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

*/


