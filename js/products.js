let currentProductsArray = [];

           
function showProductsList(){

    let htmlContentToAppend = "";
    for(var i = 0; i < currentProductsArray.length; i++){
        var product = currentProductsArray[i];

        

            htmlContentToAppend += `
            <div onclick="setProdID(${product.id}) class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                            <small class="text-muted">${product.soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${product.description}</p>
                    </div>
                </div>
            </div>
            `;
        }

        document.getElementById('list-autos').innerHTML = htmlContentToAppend;
    }


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL + `${localStorage.getItem('catID')}` + EXT_TYPE).then(function(resultObj){
        if (resultObj.status === "ok"){
            currentProductsArray = resultObj.data.products;
            showProductsList();
        }

        
    });

    
   
    });

    