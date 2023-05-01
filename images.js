window.onload = choosePic;

var myPix = new Array("scrunkly_ch.png","scrunkly_mei.jpg","scrunkly_cr.jpg","scrunkly_anna.jpg","scrunkly_co2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random(3) * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
 }
