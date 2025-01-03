
const collections = require('../config/collections');
var db = require('../config/connection')
module.exports={
    addproduct:(product,callback)=>{
        console.log(product);
        db.get().collection('product').insertOne(product).then((data)=>{
            
            callback(data.insertedId)
        })
    },
    getallproducts:()=>{
        return new Promise(async(resolve,reject)=>{
          let products = await db.get().collection(collections.PRODUCT_COLLECTIONS).find().toArray()
            resolve(products)
        })
    }
}