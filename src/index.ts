// src/index.ts
import express from 'express';

const app = express();
const port = 5000;

app.use(express.json());

app.get('/api/transactions', (req, res) => {
    res.json([
        { id: 1, description: "Groceries", amount: -20 },
        { id: 2, description: "Salary", amount: 1000 },
    ]);
});

app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
});
