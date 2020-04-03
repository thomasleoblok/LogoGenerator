var cvs;
var ctx;
var bgColor;
var penColor;

$(document).ready(function() {
    startDrawing();
});

function startDrawing(){
    bgColor = rndColor();
    penColor = rndColor();

    cvs = document.getElementById('logo');
    ctx = cvs.getContext('2d');

    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, 400, 200)

    for(var i = 0; i < 50; i++){
        penDraw();
    }
}

function penDraw(){
    // Half 1
    ctx.fillStyle = penColor;
    var coordinate = rndCoordinate();
    ctx.fillRect(coordinate.x, coordinate.y, 20, 10)

    // Half 2
    coordinate.x = (140 - coordinate.x) + 140;
    ctx.fillRect(coordinate.x , coordinate.y, 20, 10)
}

function rndCoordinate(){
    return {
        x: Math.floor(Math.random() * 141),
        y: Math.floor(Math.random() * 141)
    };
}

function rndColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * letters.length)]
    }
    return color;
}