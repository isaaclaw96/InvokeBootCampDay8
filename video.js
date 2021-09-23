var video = document.getElementById("vid");

var vol = 1;

var isPlaying = false;

function playVid() {
    video.play();
}

function pauseVid() {
    video.pause();
}

// function minVol () {
//      vol -= 0.1;
     
//      if (vol <= 0) {
//         vol=0;
//     }
//     console.log (vol); //to see if the code is working when wanna launch remember to remove it
//     video.volume = vol; //to update video element
// }

// function maxVol() {
//     vol += 0.1;

//     if (vol >= 1) {
//         vol=1
//     }
//     console.log (vol);
//     video.volume = vol;
// }

function updateVol(volNum) {
    vol += volNum;
    if (vol <= 0) {
        vol=0;
    } else if (vol >= 1) {
        vol=1;
    }
    console.log(vol);   
    video.volume = vol;
}

function switchClick() {
    //check if the video is playing (true or false)

    if (isPlaying == false) {
        video.play();
        isPlaying = true;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-pause fadeAnimate'></i>";
        return;
    } else if (isPlaying == true) {
        video.pause();
        isPlaying = false;
        document.getElementById("switch-btn").innerHTML = "<i class='fas fa-play fadeAnimate'></i>";
        return;  
    }
}

function switchVid(fileName) { 
    video.src = fileName;
}