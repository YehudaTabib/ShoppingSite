
async function TransferToRegistrationׂ(){
    try{
        window.location.href = '/signup';
}catch(error){
    alert('problem erorr ' + error)
} 
}

async function SavingUserInformation(){
    const userName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = {
        name: userName,
        email: email,
        password: password,
    }
    try{ 
        const result = await fetch(
        '/createUser', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',}
            })
            const data = await result.json();
            const route = data.route;
            window.location.href = route;
        }catch(err) {
            alert('You must log in to the system first')
        }

}

async function signin(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const ExistingUserLogin = {
        email: email,
        password: password,
    }

    try{ 
        const result = await fetch(
            '/products', {
                method: 'POST',
                body: JSON.stringify(ExistingUserLogin),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',}
                })
                const data = await result.json();
                const route = data.route;
                window.location.href = route;
            }catch(err) {
                alert('You must log in to the system first')
            }
}

let TheArrayOfSelectedProducts = [];
async function getProducts(){
    const result = await fetch('/getProducts');
    const data = await result.json();  
    function getarray(){
        TheArrayOfSelectedProducts = data;
        console.log(TheArrayOfSelectedProducts); 
        return TheArrayOfSelectedProducts;
    }
    getarray();
}
getProducts();


let sumPrice = 0;
let sumProductes = 0;
function sort(){
    const bySort = document.getElementById('select');
    const x = bySort.value;

    if(x === 'name'){
        TheArrayOfSelectedProducts.sort((a, b) => a.name.localeCompare(b.name))
    }else if(x === 'price'){
        TheArrayOfSelectedProducts.sort((a , b) => a.price - b.price)
    }
    console.log(TheArrayOfSelectedProducts);

        let numProduct=0;
        TheArrayOfSelectedProducts.forEach(prodacte =>{
        let newList = `${prodacte.name} ${prodacte.price}`
        let idName = "prodacte" + numProduct;
        let idBut = document.getElementById(idName);
        idBut.innerHTML = newList; 
        numProduct++;
    })
}
let total = [];
let selectedProducts = [];
function addBread(){
    sumProductes++;
    for(let i = 0; i< TheArrayOfSelectedProducts.length; i++){
        if(TheArrayOfSelectedProducts[i].name == 'bread'){
            selectedProducts.push(TheArrayOfSelectedProducts[i]);
            sumPrice += TheArrayOfSelectedProducts[i].price
            break;
        }
    }
    console.log(selectedProducts);
}

async function addMilk(){
    sumProductes++;
    for(let i = 0; i< TheArrayOfSelectedProducts.length; i++){
        if(TheArrayOfSelectedProducts[i].name == 'milk'){
            selectedProducts.push(TheArrayOfSelectedProducts[i]);
            sumPrice += TheArrayOfSelectedProducts[i].price
            break;
        }
    }
    console.log(selectedProducts);
}

async function addGum(){
    sumProductes++;
    for(let i = 0; i< TheArrayOfSelectedProducts.length; i++){
        if(TheArrayOfSelectedProducts[i].name == 'gum'){
            selectedProducts.push(TheArrayOfSelectedProducts[i]);
            sumPrice += TheArrayOfSelectedProducts[i].price
            break;
        }
    }
    console.log(selectedProducts);
    console.log(sumPrice);
    console.log(sumProductes);
}

async function ProgressToThePurchasePageׂׂ(){
    let total = {sumPrice: sumPrice,
                 sumProductes: sumProductes,
                 selectedProducts: selectedProducts,
                };
    try{ 
        const result = await fetch(
        '/buy', {
            method: 'POST',
            body: JSON.stringify(total),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',}
            })
            const data = await result.json();
            const route = data.route;
            window.location.href = route;
        }catch(err) {
            alert('ERROR ' + err)
        }
}

async function onload(){
    try{
        const result = await fetch('/GetTotal')
        const data = await result.json();  
        console.log(data.totalproducts);
        console.log(data.totalPrice);
        const newDivOne = document.getElementById('totalproducts');
        const newDivTo = document.getElementById('totalprice');
        newDivOne.innerHTML = 'total products:  ' + data.totalproducts;
        newDivTo.innerHTML = 'total price:  ' + data.totalPrice;
    }catch(err){
        alert('Sorry, we were unable to increase the total amount. Please try again')
    }}

async function SavingThePurchaseData(){
    try{ 
        const result = await fetch(
        '/SavingTheData', {
            method: 'POST',
            body: JSON.stringify(),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',}
            })
            const data = await result.json();
            const route = data.route;
            window.location.href = route;
        }catch(err) {
            alert('ERROR ' + err)
        }
}