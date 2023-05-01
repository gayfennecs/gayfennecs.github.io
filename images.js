window.onload = choosePic;

var myPix = new Array("scrunkly_ch.png","scrunkly_mei.jpg","scrunkly_cr.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random(3) * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
 }