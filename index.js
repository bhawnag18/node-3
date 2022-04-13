const exp = require(`express`);
const app = exp();

app.get('/', (req, res) => {
    res.send('Response Successful');
});

// Two ways of sending paramters;

// query parameters (for multiple key-value pairs): 
// Example: http://0.0.0.0:8000/addUser?name="Bhawna Girdhar"&age=28&profession="MERN Developer" 
app.post('/addUser', (req, res) => {
    console.log(req.query);
    res.send('Request Successful');
});


// url parameter (for single values):
// Example: http://0.0.0.0:8000/editUser/7
app.put('/editUser/:id', (req, res) => {
    console.log(req.params);
    res.send('Request Successful');
});


app.listen(3000, () => {
    console.log(`Server is listening on... 3000`);
});