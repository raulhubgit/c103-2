Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    })
}

console.log("Ml5: ", ml5.version);
var class_files = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6fuoht21b/model.json', modelLoaded);

function modelLoaded(){
    console.log("TROPA");
}