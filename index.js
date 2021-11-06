const express = require('express')
const app = express()
const port = 3000



//routing
app.get('/', (req, res,err) => { //Halaman Root
  res.send('Hello World!')
})

app.get('/halaman1', (req, res) => { //Halaman 1
    // res.send('Halaman1')
    res.json({
        nama :'Darman',
        Alamat:'Jauh',
        email:' darman @gmail.com',

    })
  })

  app.get('/halaman3/:id', (req, res) => {
    res.send('Halaman 3 memiliki id ' + req.query.category);
    
  });

 app.get('/halaman2', (req, res) => { //Halaman 2
     res.send('Halaman2')
  })

  app.use('/', (req, res) => { //Menggunakan Use untuk request apapun
      res.send('Halaman tidak ditemukan');
      
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

