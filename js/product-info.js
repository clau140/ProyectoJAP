let infoProd;
let commentsProd;

function showInformationProduct(){
   
    let htmlContentToAppend = `
        <div class="p-5 pb-2">
            <h2 class="fw-bold">${infoProd.name}</h2>
            <hr>
            <h5 class="fw-bold">Precio</h5>
            <p>${infoProd.currency} ${infoProd.cost}</p>
            <h5 class="fw-bold">Descripción</h5>
            <p>${infoProd.description}</p>
            <h5 class="fw-bold">Categoría</h5>
            <p>${infoProd.category}</p>
            <h5 class="fw-bold">Cantidad de vendidos</h5>
            <p>${infoProd.soldCount}</p>
            <hr>
            <h5 class="fw-bold">Imágenes ilustrativas</h5>
        </div>
        
        
    `;
    document.getElementById("prodInfo").innerHTML = htmlContentToAppend;
};



function showImagesProduct(){
    
    let htmlContentToAppend = ``;
    let imagesProduct = infoProd.images;

    for (let image of imagesProduct){
        
        htmlContentToAppend += `
            
            <img class="img-thumbnail" src=${image}>
        `;
    }
    document.getElementById("images").innerHTML += htmlContentToAppend;
    
};


function showCommentsProduct(){
   
    htmlContentToAppend = ``;
    for (let comment of commentsProd){
        let stars = '';
        for (let i = 1; i <= 5; i++){
            if(i <= comment.score){
                stars += `<span class="fa fa-star checked"></span>`
            }
            else{
                stars += `<span class="fa fa-star"></span>`;
            }         
        }
        htmlContentToAppend +=`
            <div class="border">
                <div class="p-1">
                    <p class="fw-bold" style="display: inline;" >${comment.user} - </p>
                    <p style="display: inline;">${comment.dateTime} - </p>
                    <p style="display: inline;">${stars}</p>
                </div>
                <div class="p-1">
                    <p>${comment.description}</p>
                </div>
            </div>
        `;
    }
    document.getElementById("comentarios").innerHTML += htmlContentToAppend;
    
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + `${localStorage.getItem('prodID')}` + EXT_TYPE)
    .then(function(resultObj){
        if (resultObj.status === "ok"){
            infoProd = resultObj.data;
            showImagesProduct();
            showInformationProduct();
        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + `${localStorage.getItem('prodID')}` + EXT_TYPE)
    .then(function(resultObj){
        if (resultObj.status === "ok"){
            commentsProd = resultObj.data;
            showCommentsProduct();
        }
    });
});

document.getElementById("user-name").innerHTML = `${sessionStorage.getItem('loggedInUser')}`;

document.getElementById("send").addEventListener("click", ()=>{
    document.getElementById("opinion").value = '';
    document.getElementById("scores").selectedIndex = 0;
});