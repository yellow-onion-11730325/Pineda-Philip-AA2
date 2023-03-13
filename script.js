let aout = "";
let a = 0;
while (a<50){
    a++;
    aout += a+", ";
}
document.write(aout+"<br>");

let bout = "";
let b = 0;
do{
    b = b+2;
    bout += b+", ";
}while(b<50)
document.write(bout+"<br>");

let cout = "";
for(let c = 1; c <= 4096; c*2){
    cout += c+", ";
}
document.write(cout+"<br>");