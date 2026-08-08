const express = require('express');
const app = express();
const PORT = 3000;
app.get('/user/:id', (req, res) => {
    const userid = req.params.id;
    res.send(`<h1>user profile</h1><p>you are at user profile id: <strong>${userid}</strong></p>`);
});

app.get('/flights/:from/:to', (req, res) => {
    const{from, to} = req.params;
    res.send(`searching for flights department from <b>${from}</b> arriving at <b>${to}</b>.`);
});

app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;
    res.json({
        message: "search results",
        filteringBy : category|| "None",
        sortingBY: sort||"Default"
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});
