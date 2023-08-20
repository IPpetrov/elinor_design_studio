fetch('data/products.json')
    .then(res => res.json())
    .then((products) => {

        const productContainer = document.getElementById("productContainer");

        function addProducts(products){
            for (var i = 0; i < products.length; i++) {

                productContainer.innerHTML +=createProducts(products, i);
            }
        }
        addProducts(products);

        function createProducts(products, i) {
            const card =  
            '<div class="card chairs w-auto">'+
              '<img class="card-img-top" src="' + products[i].imageUrl + '" alt="Living room photo">'+
              '<div class="card-body p-0">'+
                '<div class="d-flex align-items-center align-items-lg-end justify-content-between flex-column flex-lg-row mt-2 mt-lg-5 text-center">'+
                  '<h4>' + products[i].productName + '</h4>'+
                  '<a href=""><h6>SHOP</h6></a>'+
                '</div>'+
              '</div>'+
            '</div>';
            return card
        }

}).catch(err => console.error(err));