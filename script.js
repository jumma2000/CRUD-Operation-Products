//getdata
let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submit =document.getElementById('submit');
let search =document.getElementById('search');
let searchTitle =document.getElementById('searchTitle');
let searchCategory =document.getElementById('searchCategory');
let update =document.getElementById('update');
let deleteBtn =document.getElementById('delete');

function getTotal(){
  if(price.value !='')
  {
    let result = (+price.value + +taxes.value + +ads.value)- +discount.value ;
    total.innerHTML = result;
    total.style.background = '#090';
  }else{
    total.innerHTML = '';
    total.style.background = '#f00';
  }
}


//create product
let datapro;
if(localStorage.products !=null)
{
   datapro = JSON.parse(localStorage.getItem('products'));
}else{
  datapro = [];
}

  submit.onclick = function(){
    let newPro ={
      title:title.value,
      price:price.value,
      taxes:taxes.value,
      ads:ads.value,
      discount:discount.value,
      total:total.innerHTML,
      count:count.value,
      category:category.value,
    }
   
    datapro.push(newPro);
    localStorage.setItem( 'products', JSON.stringify(datapro) )
    console.log(datapro);
     clearData();
     showData();
}
//Clear data
function clearData()
{
  title.value = '';
  price.value = '';
  taxes.value = '';
  ads.value = '';
  discount.value = '';
  total.innerHTML = '';
  count.value = '';
  category.value = '';
}
showData()
function showData()
{
  let table ='';
  for(let i=0; i<datapro.length; i++)
    {
      table += `<tr>
      <td>${i+1}</td>
      <td>${datapro[i].title}</td>
      <td>${datapro[i].price}</td>
      <td>${datapro[i].taxes}</td>
      <td>${datapro[i].ads}</td>
      <td>${datapro[i].discount}</td>
      <td>${datapro[i].total}</td>
      <td>${datapro[i].category}</td>
      <td> <button id="update" onclick="updateData(${i})">update</button></td>
      <td> <button id="delete" onclick="deleteData(${i})">delete</button></td>
      </tr>`
    }
  document.getElementById("tbody").innerHTML=table;
}
