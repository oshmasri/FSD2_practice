const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send('<h1> Welcome SVECW</h1><p>You have reached the entrace of college.</p>');
});
app.get('/about', (req, res) => {
    res.send('This server was built as a learning exercise for express.js by SVECW AI department');
});
app.get('/api/status', (req, res) =>{
    res.join({
        active: true,
        version: "1.0.0",
        message: "the server is Working properly"
    });
});

app.listen(PORT, () => {
    console.log(`Success! server is running at http://localhost:${PORT}`);
})