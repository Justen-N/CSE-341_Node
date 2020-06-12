const express = require ('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('index',{pageTitle:'Add Book'});
});
router.get('/book-list',(req, res, next)=>{
    let books = req.app.get('bookArray')
    res.render('books',{pageTitle:'My Library',books:books})
})
router.post('/add-book', (req,res,next)=>{
    let books = req.app.get("bookArray");
    books.push({
        title: req.body.titleIn,
        author: req.body.author,
        summary: req.body.summary
    });
    res.redirect('/book-list');
});

module.exports = router;