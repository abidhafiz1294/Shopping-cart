let btnCart=document.querySelectorAll("a"),
shoppingCart=document.querySelector("#cartBody");




//functions
function buyProduct(e){
   

    
    if (e.target.classList.contains('btn-for-cart')) {
        var buyyingInfo =e.target.parentElement;
        
        getProductInfo(buyyingInfo);

    }
    
}


function getProductInfo(buyyingInfo){

    let productInfo={
        title: buyyingInfo.querySelector('.Books-name').textContent,
        price: buyyingInfo.querySelector('.price').textContent,
        id: buyyingInfo.querySelector('a').parentElement.getAttribute('data-id')
    }
    addToCart(productInfo);
    
}
function addToCart(productInfo){

    let row=document.createElement('tr');
    row.appendChild(addToTd(productInfo.title));
    row.appendChild(addToTd(productInfo.price));

    let anchor=document.createElement('a');
    anchor.herf='#';
    anchor.setAttribute('data-id', productInfo.id);
    anchor.textContent='x';
    anchor.classList='remove';

  
    row.appendChild(addToTd(anchor,1));
    
    shoppingCart.appendChild(row);

    

}
function addToTd(info,i){
    let td=document.createElement('td');
    td.textContent= info;
    
    if (i==1){
        td.appendChild(info)
    }
    
    return td;
}
function remove(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove();
    }


}

//add Event Listener
  
btnCart.forEach(item=>{
    addEventListener('click', buyProduct);})

shoppingCart.addEventListener('click',remove);


    