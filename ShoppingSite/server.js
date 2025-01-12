const express = require('express')
const mongoose = require('mongoose');
const app = express()
app.use('/',express.static('client'))
app.use(express.json())

app.get('/buy', (req, res)=>{
  res.sendFile(__dirname + '/client/buy.html')
})

app.get('/products', (req, res)=>{
  res.sendFile(__dirname + '/client/products.html')
})

app.get('/signup', (req, res)=>{
  res.sendFile(__dirname + '/client/signup.html')
})

app.get('/index', (req, res)=>{
  res.sendFile(__dirname + '/client/index.html')
})

app.post('/createUser', async (req, res)=>{
  const UserDetails = req.body;
    const filter = {
      email: UserDetails.email,
    }
    const x = await UserDetailsModel.findOne(filter);
    console.log(x);
    
          if(x === null){
            await UserDetailsModel.create(UserDetails);
            res.json({route:'/index'})
      }
      else{
        res.status(400).send();
      }
})

app.post( '/products', async (req, res)=>{
  const UserLogin = req.body;
  try{
    const filter = {
      email: UserLogin.email,
      password: UserLogin.password,
    }

  const x = await UserDetailsModel.findOne(filter)
  
  if(x.email == UserLogin.email && x.password == UserLogin.password){
    res.json({route:'/products'})
  }
  else{
    res.status(400).send();
  }
}catch(err){
  res.status(400).send();
  }
})
let totalAll = {
  totalproducts: 0,
  totalPrice: 0,
}
let PurchaseSummary = {selectedProducts: 'kjh'}
app.post('/buy', async (req, res)=>{
  const total = req.body;
  console.log(total);
  
  totalAll.totalPrice = total.sumPrice
  totalAll.totalproducts = total.sumProductes;
  PurchaseSummary.selectedProducts = total.selectedProducts
  console.log(PurchaseSummary);
  
  try{
    res.json({route: '/buy'})
}catch(err){
    res.status(400).send
}
})

app.post('/SavingTheData', (req, res)=>{
  console.log(PurchaseSummary);
  try{
  AddorderspendingsModel.create(PurchaseSummary.selectedProducts);
   res.json({route:'/index'})
  }catch(err){
    res.status(400).send({msg:'problem'});
  }
})



app.get('/GetTotal', async (req, res)=>{
  try{
  res.json(totalAll);
  console.log(totalAll);
  }catch(err){
    res.status(400).send
  }
})

app.get('/getProducts',async (req, res)=>{
  const getProducts = await AddProductsModel.find()
  try{
    res.json(getProducts);
  }catch(err){
    res.status(500).json('cant get products')
  }
})


let AddorderspendingsModel;
let AddProductsModel;
let UserDetailsModel;
async function connectToDb(){
  try{
    await mongoose.connect('mongodb+srv://yekfir59:prNL0cRAMKQRImms@cluster0.tjns7sp.mongodb.net/shoppingSite')
    console.log('connect to db');

    const UserDetailsSchema = mongoose.Schema({
      name: String,
      email: String,
      password: String,
    })
    UserDetailsModel = mongoose.model('users', UserDetailsSchema);

    const AddProductsSchema = mongoose.Schema({
      name: String,
      price: Number,
    })
    AddProductsModel = mongoose.model('productlists', AddProductsSchema);

    const AddorderspendingsSchema = mongoose.Schema({
      name: String,
      price: Number,
    })
    AddorderspendingsModel = mongoose.model('orderspendings', AddorderspendingsSchema);

  }catch (error){
    console.log('ERROR ' + error);
  }
}
connectToDb();

app.listen(3000, ()=>{
    console.log('im listen');
  })
  