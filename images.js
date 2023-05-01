window.onload = choosePic;

var myPix = new Array("scrunkly_ch.png","scrunkly_mei.jpg","scrunkly_cr.jpg","scrunkly_anna.jpg","scrunkly_co2.jpg","scrunkly_cotton.jpg","scrunkly_fluff.png","scrunkly_dudettes.jpg","scrunkly_dudettes_2.jpg","scrunkly_skedgy.png");

function choosePic() {
     var randomNum = Math.floor(Math.random(10) * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
 }
