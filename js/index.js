// ITERATION 1

function updateSubtotal(product) {
  let price = product.getElementsByTagName('td')[1].innerText.slice(1)
  let quantity = product.getElementsByTagName('td')[2].getElementsByTagName('input')[0].value;
  subtotal = price*quantity;
  console.log(subtotal)
  return subtotal;
}

function calculateAll() {
  let total = 0;
  const products = document.querySelectorAll('.product');
  for (let i = 0; i < products.length; i++) {
    subtotal = updateSubtotal(products[i]);
    total = total + subtotal;
    document.querySelectorAll('.subtotal')[i].innerText = '$' + subtotal;
  }
  document.getElementById('total-value').innerHTML = 'Total: $' + total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  target.remove(target.selectedIndex);
  calculateAll()
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let productName = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value;
  let price = document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value;
  if(productName.length === 0 || price == 0){
    alert('Please add product name and price')
  }
  else {
    var table = document.getElementById("cart");
    var tableBody = document.querySelectorAll('.product')[0];
    var newRow = tableBody.cloneNode(true);
    newRow.getElementsByTagName('td')[0].innerText = productName;
    newRow.getElementsByTagName('td')[1].innerText = '$' + price;
    table.appendChild(newRow);
    document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[0].value = "";
    document.getElementsByClassName('create-product')[0].getElementsByTagName('input')[1].value = 0;
  }
}

window.addEventListener('mousemove', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const RemoveBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < RemoveBtn.length; i++) { 
    RemoveBtn[i].addEventListener('click', removeProduct);
  }

  const createProducts = document.getElementById('create');
  createProducts.addEventListener('click', createProduct);
});
