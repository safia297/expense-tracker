import { useState, useEffect } from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import SummaryChart from "./components/SummaryChart";

function App() {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    const res = await fetch("/api/expenses");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAdd = async (newExpense) => {
    await fetch("/api/expenses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newExpense),
    });
    fetchExpenses();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/expenses/${id}`, { method: "DELETE" });
    fetchExpenses();
  };

  const totalIncome = expenses.filter((e) => e.type === "income").reduce((sum, e) => sum + e.amount, 0);
  const totalExpenses = expenses.filter((e) => e.type === "expense").reduce((sum, e) => sum + e.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="app">
      <h1>💰 Expense Tracker</h1>
      <div className="summary-cards">
        <div className="card balance"><span>Balance</span><strong>${balance.toFixed(2)}</strong></div>
        <div className="card income"><span>Income</span><strong>+${totalIncome.toFixed(2)}</strong></div>
        <div className="card expense"><span>Expenses</span><strong>-${totalExpenses.toFixed(2)}</strong></div>
      </div>
      <div className="main-grid">
        <div className="left">
          <AddExpense onAdd={handleAdd} />
          <ExpenseList expenses={expenses} onDelete={handleDelete} />
        </div>
        <div className="right">
          <SummaryChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
}

export default App;