const express = require('express');
const { timeStamp } = require('node:console');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to my API",
        status: "Active",
        timestamp: new Date()
    });
});

app.get('/students', (req, res) => {
    const studentList = [
        {id: 101, name: "ALice", course: "MERN stack"},
        {id: 102, name:"Bob", course: "Data Science"},
        {id: 103, name: "Charlie", course: "UI/UX"}
    ];
});

app.get('/product/:id', (req, res) => {
    const productid = req.params.id;

    res.json({
        requestedid: productid,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON server is running at http://localhost:${PORT}`);
});