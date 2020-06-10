const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

const homeRouter = require('./routes/home');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen(PORT ,() =>{
    console.log(`Listening to port ${PORT}`);
})
