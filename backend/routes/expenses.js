const express = require("express");
const router = express.Router();
const db = require("../database");

// GET all expenses
router.get("/", (req, res) => {
    const expenses = db.prepare("SELECT * FROM expenses ORDER BY date DESC").all();
    res.json(expenses);
});

// POST add new expense
router.post("/", (req, res) => {
    const { title, amount, category, type, date } = req.body;

    const stmt = db.prepare(
        "INSERT INTO expenses (title, amount, category, type, date) VALUES (?, ?, ?, ?, ?)"
    );
    const result = stmt.run(title, amount, category, type, date);

    res.status(201).json({ id: result.lastInsertRowid, title, amount, category, type, date });
});

// DELETE an expense
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    db.prepare("DELETE FROM expenses WHERE id = ?").run(id);
    res.json({ message: "Deleted!" });
});

module.exports = router;