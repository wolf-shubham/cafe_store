const express = require('express');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server listening at port ${port}`)
});

app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'));
// app.use('/js', express.static(__dirname + 'public/js'));
// app.use('/images', express.static(__dirname + 'public/images'));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.use((req, res) => {
    res.sendFile('./views/error_404.html', { root: __dirname });
})


