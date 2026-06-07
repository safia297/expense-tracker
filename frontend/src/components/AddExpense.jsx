import { useState } from "react";

function AddExpense({ onAdd }) {
    const [form, setForm] = useState({
        title: "",
        amount: "",
        category: "",
        type: "expense",
        date: "",
    });

    const handleSubmit = () => {
        onAdd(form);
        setForm({ title: "", amount: "", category: "", type: "expense", date: "" });
    };

    return (
        <div className="form-card">
            <h2>Add New</h2>
            <input placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input placeholder="Amount" type="number" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} />
            <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
            <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default AddExpense;