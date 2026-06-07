function ExpenseList({ expenses, onDelete }) {
    return (
        <div className="expense-list">
            <h2>Transactions</h2>
            {expenses.length === 0 && <p>No expenses yet!</p>}
            {expenses.map((expense) => (
                <div key={expense.id} className={`expense-item ${expense.type}`}>
                    <div>
                        <strong>{expense.title}</strong>
                        <span>{expense.category} · {expense.date}</span>
                    </div>
                    <div className="expense-right">
                        <span>{expense.type === "income" ? "+" : "-"}${expense.amount}</span>
                        <button onClick={() => onDelete(expense.id)}>🗑️</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ExpenseList;