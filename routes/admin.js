var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [{
    name:"Motorola edge",
    category:"Mobile Phone",
    description:"Latest motorola Phone",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSytcvnw3XI0T44zv42_OHM9RGNKHU-yzZtfblo37oWPHgeOM0XZqkI64LVnCnPQ0bXXsCgMrTz2rEgLWPiW53RPGks_Lx7JkJKQpchvWpU"
  },
  {
    name:"Iphone 16 pro",
    category:"Mobile Phone",
    description:" Apple Does it better",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD_hnGkraHc6OAQUFAm5HT-dI773Q1nTjlIQ&s"
  },  {
    name:"Oneplus 12r",
    category:"Mobile Phone",
    description:"Never Settle",
    image:"data:image/jpeg;base64,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"
  },
    {
    name:"Samsung s23",
    category:"Mobile Phone",
    description:"latest galaxy is here",
    image:"data:image/jpeg;base64,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"
  },
]
res.render('admin/view-products',{admin:true,products});
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body);
  console.log(req.files.image)
})


module.exports = router;
