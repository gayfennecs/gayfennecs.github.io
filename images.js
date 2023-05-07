window.onload = choosePic;

var scrunklys = [
"scrunkly_anna.jpg",
"scrunkly_ch.png",
"scrunkly_co2.jpg",
"scrunkly_cotton.jpg",
"scrunkly_cr.jpg",
"scrunkly_dudettes_2.jpg",
"scrunkly_dudettes.jpg",
"scrunkly_favicon.png",
"scrunkly_fluff.png",
"scrunkly_mei.jpg",
"scrunkly_skedgy.png",
]

function choosePic() {
     var randomNum = Math.floor(Math.random(10) * scrunklys.length);
     document.getElementById("scrunklys").src = scrunklys[randomNum];
 }
