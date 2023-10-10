fetch('product.json')
.then(response => response.json())
.then(function (processing){
    let placeholder = document.querySelector('#info');
    let out = "";

    for (const productInfo of processing) {
        out += `<div id="products">
<img src="${productInfo.image}" />
<h1>Product: ${productInfo.productName}</h1>
<h4>Price: ${productInfo.price}</h4>
<p>Quantity: ${productInfo.quantity}</p>
<button class = "btn">Look More</button>
</div>`
    }

    placeholder.innerHTML = out;
})