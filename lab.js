alert("welcome to IKEA SHOP!");
alert("we have everything you need to your house!");

var productType =prompt("what do you need  for your home furniture things or electronic things ?")
var noProduct = prompt(" how many product are you gonna buy today ?");
var orderDetails ;

if (noProduct > 5 && noProduct <= 20){

    orderDetails="congrats you got a 30% discount!"

}else if (noProduct > 20 && noProduct <= 40){

    orderDetails="congrats you got a 40% discount!"

}else if (noProduct > 40 && noProduct  <= 60 ){

    orderDetails="congrats you got a 50% discount!"

}else if (noProduct > 60 && noProduct  <= 80 ){

    orderDetails="congrats you got a 60% discount!"

} else if (noProduct > 80 && noProduct  <= 100 ){

    orderDetails="congrats you got a 75% discount!"
}
else {

    orderDetails="Oops there is no discounts for this amount of products !"
}



document.getElementById("order").innerText=productType;
document.getElementById("orderdiscount").innerText=orderDetails;
document.getElementById("productcount").innerText=noProduct;

confirm("Huge Discounts Today !");
alert("GoodBye!");

