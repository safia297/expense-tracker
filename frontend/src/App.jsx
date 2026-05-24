import { useState, useEffect } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("/api/expenses")
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  return (
    <div>
      <h1>💰 Expense Tracker</h1>
      <p>Expenses loaded: {expenses.length}</p>
    </div>
  );
}

export default App;