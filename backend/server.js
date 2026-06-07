const express = require('express');
const cors = require('cors');
const db = require("./database");
const app = express();
const PORT = 3001;
const expenseRoutes = require("./routes/expenses");

app.use(cors());
app.use(express.json());
app.use("/api/expenses", expenseRoutes); // 👈 add this

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}

);