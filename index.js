const bodyParser = require('body-parser')
const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())

//routing
app.get('/', (req, res,err) => { //Halaman Root
  res.send('Hello World!')
})

app.get('/halaman1', (req, res) => { //Halaman 1
    res.send('Halaman 1');
    });

app.post('/user', (req, res) => {
    res.json({
      message:'Create NEW USER:POST /user',
      body:req.body
    })
});

//   app.get('/halaman3/:id', (req, res) => {
//     // res.send('Halaman 3 memiliki id ' + req.query.category);
//     res.send(`Halaman 3 memiliki id ${req.query.category}`);
    
//   });
//   app.get('/halaman3', (req, res) => {
//     // res.send('Halaman 3 memiliki id ' + req.query.category);
//     res.send(`Halaman 3 `);
    
//   });
//  app.get('/halaman2', (req, res) => { //Halaman 2
//      res.send('Halaman2')
//   })

//   app.use('/', (req, res) => { //Menggunakan Use untuk request apapun
//       res.send('Halaman tidak ditemukan');
      
//   });

app.listen(port, () => {
  console.log(`Localhost berhasil dijalankan pada http://localhost:${port}`)
})

