import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function SummaryChart({ expenses }) {
    const categories = {};
    expenses
        .filter((e) => e.type === "expense")
        .forEach((e) => {
            categories[e.category] = (categories[e.category] || 0) + e.amount;
        });

    const data = {
        labels: Object.keys(categories),
        datasets: [
            {
                data: Object.values(categories),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
            },
        ],
    };

    return (
        <div className="chart-card">
            <h2>Spending by Category</h2>
            {Object.keys(categories).length === 0 ? (
                <p>No expenses to chart yet!</p>
            ) : (
                <Doughnut data={data} />
            )}
        </div>
    );
}

export default SummaryChart;