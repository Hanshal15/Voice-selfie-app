var SpeechRecognition = window.webkitSpeechRecognition; //its an API used to convert speech into text

var Recognition= new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);

    if(content == "take my selfie") {
        console.log("taking your selfie");
        speak(); //calling the speak function

    }
    

    
}
       
function speak() {
    var synth= window.speechSynthesis; //it is an API used to convert text into speech

    var speak_data= "taking your selfie in 5 seconds"
           
    
    var utterthis= new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    Webcam.attach(camera); //webcam.attach triggers the camera
    
    setTimeout(function()  {
        take_snapshot();
        save();
    }, 5000);
    
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality:90
});

var camera= document.getElementById("camera");

function take_snapshot() {
Webcam.snap(function(data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("captured_image").src;
    link.href=image;
    link.click();
}