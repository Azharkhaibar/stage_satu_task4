const express = require("express");
const app = express();
const port = 3000;

// mengizinkan koneksi folder agar terhubung
app.use('/design', express.static('design'))
app.use('/jsday1', express.static('./jsday1'))
app.use('/images', express.static('./images'))

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// deklarasi untuk hbs express
app.set('view engine', 'hbs')
app.set('views', 'views')


app.get("/contact", renderContact);
app.get("/task4&5", renderTaskFourFive);
app.get("/index", renderIndex);
app.get('/oop', renderOOP);
app.get('/indox', renderIndox);
app.get('/blog', renderBlog);

function renderIndox(req, res) {
  res.render('indox' , {
    data: 'testing'
  });
}

// TASK4&5
function renderTaskFourFive(req, res) {
  res.render('task4&5');
}

// INDEX
function renderIndex(req, res) {
  const messages = 'Index berhasil di render';
  res.render('index', {
    messages
  })
  console.log(messages);
}

// CONTACT
function renderContact(req, res) {
  res.render('contact');
}

// OOP
function renderOOP(req, res) {
  try {
    res.render('oop')
  } catch (err) {
    console.log('render OOP gagal');
  }
}

function renderBlog(req, res) {
  const err = 'ERROR'
  try {
    res.render('blog')
  } catch (err) {
    console.log(err);
  }
}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
