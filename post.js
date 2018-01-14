
const express = require('express');
const app = express();
const parser = require('body-parser').urlencoded({
    extended: false
});
const User = require('./models/user');

app.set('view engine', 'ejs');

const users = [
    new User('Huong', '12'),
    new User('Ngoc', '3'),
    new User('Nguyen', 1)
]
app.get('/', (req, res) => {
    res.render('list', {
        users
    })
})
app.get('/add', (req, res) => {
    res.render('add')
})
app.post('/add', parser, (req, res) => {
    const { name, age } = req.body;
    //console.log(req.body);
    const user = new User(name, age)
    users.push(user)
    res.redirect('/');
})
app.get('/remove/:name', (req, res) => {
    const { name } = req.params

    const index = users.findIndex(user => user.name === name);
    // trả về chỉ số (index) của phần tử đầu tiên trong mảng thỏa mãn hàm truyền vào
    //console.log(user);

    users.splice(index, 1);
    res.redirect('/');
})
app.listen(3000, () => console.log('Server post started!'));