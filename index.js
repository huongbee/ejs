const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.render('a')
})

app.get('/tinh/:pheptinh/:a/:b', (req, res) => {

    let pheptinh = req.params.pheptinh,
        a = req.params.a,
        b = req.params.b;

    if (pheptinh == "cong") pheptinh = '+';
    else if (pheptinh == "tru") pheptinh = '-';
    else if (pheptinh == 'nhan') pheptinh = '*';
    else pheptinh = '/'

    const chuoiPhepTinh = `${a} ${pheptinh} ${b}`
    res.send(`${chuoiPhepTinh} = ${eval(chuoiPhepTinh)} `)
    console.log(chuoiPhepTinh, a, b, pheptinh)
})


app.listen(4000, () => console.log('Server started!'));