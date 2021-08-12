Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("image").innerHTML='<img id="img1" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tuP5buN3-/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded🦥");
}
function recognize(){
    img=document.getElementById("img1");
    classifier.classify(img,got_result);
}
function got_result(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("scapture").innerHTML=results[0].label;
        document.getElementById("sidentify").innerHTML=results[0].confidence.toFixed(3);
    }
}