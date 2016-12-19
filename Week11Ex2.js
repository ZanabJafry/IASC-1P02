var aD = new Array();

aD[0]="Hotdog";
aD[1]="bathing suit";
aD[2]="apple sauce";
aD[3]="SIM card";
aD[4]="exam";

var hM = new Array();

hM[0]="sublime";
hM[1]="phantasmagoric";
hM[2]="tortuous";
hM[3]="diapehnous";
hM[4]="propagandistic";

function seriously() {

var rand=Math.floor( Math.random()*4 );

var noun= aD[rand];
var rand2=Math.floor( Math.random()*4 );

var adjective= hM[rand2];


document.getElementById("help").innerHTML+="What a" + " " + adjective + " " + noun + "!" + "<br>";
}
