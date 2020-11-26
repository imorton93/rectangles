const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Rectangle = require('./models/rectangleModel');

const app = express();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm',  'html'],
    index: "rectangles.html"
}

var dbUrl = "mongodb+srv://test1:test1@cluster0.9dygl.mongodb.net/Rectangles?retryWrites=true&w=majority";
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log('mongodb connected');
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use('/',express.static(__dirname + '/public', options));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// rectangles = []
app.post('/addRectangle', (req,res) => {
    const rectangle = new Rectangle({
        width: req.body.width,
        height: req.body.height,
        color: req.body.colors,
    });
    rectangle.save((err, result) => {
        if(err) throw err;

        console.log(result);
    });

    // console.log(req.body);
    // rectangles.push(req.body);
    // res.redirect('back');
});

app.get('/getRectangles', (req,res) => {
    Rectangle.find() //all documents from collection
        .then((result) => {
            res.send(result);
        })

    // res.json(rectangles);
});