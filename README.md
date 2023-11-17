# Banking_project_phase2_week1
Expense Tracker is a React application that helps you manage and track your expenses. It allows you to add, search, and delete transactions, providing a user-friendly interface for tracking your financial activities.

##Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [API Endpoints](#APIEndpoints)
- [License](#License)

##Installation
1. Clone the repository to your local machine:
git clone https://github.com/your-username/expense-tracker.git
2. Navigate to the project directory:
cd expense-tracker
3. Install the dependencies:
npm install

##Usage
Once the installation is complete, you can start the application:
npm start
Open your browser and go to http://localhost:3000 to use the Expense Tracker app.

##Features
- Add new expenses with date, description, category, and amount.
- Search expenses by description.
- Delete expenses individually.
- View a table of all expenses.

##API Endpoints
The application interacts with a simple API to perform CRUD operations on expenses. The API has the following endpoints:

- GET /transactions: Retrieve all transactions.
- POST /transactions: Add a new transaction.
- DELETE /transactions/:id: Delete a transaction by ID.
- PATCH /transactions/:id: Update the correct index of a transaction.

##Example API Response
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  // ... other transactions
]

##License
This project is licensed under the MIT License.
