function Product(pic, price) {
    
    this.pic = pic;
    this.price = price;
}


let products = [];
const Fricassée = new Product("/images/restaurants/stil-u2Lp8tXIcjw-unsplash.jpg", 25);
products.push(Fricassée);

products.forEach(prod=>
    listOfProducts += `
      <tr class="text-center">
        <td><img src=${prod.pic} class="img-fluid img-thumbnail w-50"></td>
        <t
        <td class="w-25 align-middle">${prod.price}€</td>
        <td class="w-25 align-middle"><button class="btn btn-info">View</button></td>
      </tr>
      `   
  )
 
document.getElementById('productList').innerHTML = listOfProducts;
