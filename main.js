narizX = "";
narizY = "";
function preload(){
    audifonos = loadImage("Audifonos.png");
    wifi = loadImage("wifi.png");
    Payaso = loadImage("Payaso.png");
}
function setup(){
    camaraF = createCanvas(200, 200);
    camaraF.center();
    camaraY = createCapture(VIDEO);
    camaraY.size(200, 200);
    camaraY.hide();
    modelo = ml5.poseNet(camaraY, nariz);
    modelo.on("pose", resultados);
}
function resultados(results){
    if (results.length > 0) {
        console.log(results);
        narizX = results[0].pose.nose.x;
        narizY = results[0].pose.nose.y;
    }
}
function nariz(){
    console.log("narizActivada");
}
function draw(){
    image(camaraY, 0, 0, 200, 200);
    Filtro = document.getElementById("filtro").value;
    if (Filtro == "wi-fi") {
        image(wifi, narizX -50, narizY -150, 100, 100);
    } 
    if (Filtro == "Audifonos") {
        image(audifonos, narizX -55, narizY -80, 110, 90);
    }
    if (Filtro == "Payaso") {
        image(Payaso, narizX -70, narizY -90, 135, 100);
    }
    
}
function foto(){
   Foto = document.getElementById("nombrefoto").value
   save(Foto + ".png");
}