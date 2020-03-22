/*
app.use(express.static('public'));
*/

const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 3000

/*app.get('/', (req, res) => res.send('Hello World!'))*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.get('/catinfo', (req, res) => {
    const cat = {
        'name': 'Frank',
        'age': 6,
        'weight': 5,
    };
    res.json(cat);
});
