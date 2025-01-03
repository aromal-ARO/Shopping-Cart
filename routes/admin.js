var express = require('express');
var router = express.Router();
var productHelpers =require('../helpers/product-helpers')
var collections =require('../config/collections')

/* GET users listing. */
router.get('/', function(req, res, next) {
 productHelpers.getallproducts().then((products)=>{
  
 })
res.render('admin/view-products',{admin:true,products});
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
 // console.log(req.body);
  //console.log(req.files.image)
  productHelpers.addproduct(req.body,(id)=>{
    let image = req.files.image
    console.log(id)
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product");
      }
      else{
        console.log(err)
      }
    })
  
  })
})


module.exports = router;
