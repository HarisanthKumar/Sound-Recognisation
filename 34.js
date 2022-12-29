var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var img3 = document.querySelector("#img3");
var img4 = document.querySelector("#img4");
var res = document.querySelector("#result");
var acr = document.querySelector("#accuracy");
var classifier = undefined

function check() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9w8tW1cS6/model.json", upload);
};

function upload() {
    classifier.classify(gotresults);
};

function gotresults(error, results) {
    if (error) {
        console.log("error");
    } else {
        if (results[0].label == "Clap") {
            img1.src = "../media/1gif.gif";
            img2.src = "../media/2png.png";
            img3.src = "../media/3png.png";
            img4.src = "../media/4png.png";
        } else if (results[0].label == "Snap") {
            img1.src = "../media/1png.png";
            img2.src = "../media/2gif.gif";
            img3.src = "../media/3png.png";
            img4.src = "../media/4png.png";
        } else if (results[0].label == "Bell") {
            img1.src = "../media/1png.png";
            img2.src = "../media/2png.png";
            img3.src = "../media/3gif.gif";
            img4.src = "../media/4png.png";
        } else if (results[0].label == "Background Noise") {
            img1.src = "../media/1png.png";
            img2.src = "../media/2png.png";
            img3.src = "../media/3png.png";
            img4.src = "../media/4gif.gif";
        };
        document.querySelector("#container").style.display="flex";
        res.innerHTML=results[0].label;
        acr.innerHTML=results[0].confidence;
    };
};

function response() {
    w = window.getComputedStyle(document.body).width;
    h = window.getComputedStyle(document.body).height;
    w = remove(w);
    h = remove(h);
    img1.width = w / 4;
    img2.width = w / 4;
    img3.width = w / 4;
    img4.width = w / 4;
    img1.height = w / 4 - (w / 20);
    img2.height = w / 4 - (w / 20);
    img3.height = w / 4 - (w / 20);
    img4.height = w / 4 - (w / 20);
};
window.addEventListener("resize", response);
response();

function remove(x) {
    z = "";
    for (y = 0; y < x.length - 2; y++) {
        z += x[y];
    };
    x = Number(z);
    return x;
};