var video = document.getElementById("vid");

var vol = 1;

var isPlaying = false;

var next = document.getElementById('next');

next = 0

video.muted = false

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

function muteVol() {
    if (video.muted == false) {
        video.muted = true;
        document.getElementById("mute-btn").innerHTML = '<i class="fas fa-volume-mute fadeAnimate"></i>';
    } else if (video.muted == true) {
        video.muted = false;
        document.getElementById("mute-btn").innerHTML = '<i class="fas fa-volume-up fadeAnimate"></i>'
    }
}

function switchNext(num) {
    next = next +1;
    console.log(next)
    if (next == 1) {
        video.src = 'ballons.mp4';
    } if (next == 2) {
        video.src = 'wheel.mp4';
    } if (next == 3) {
        video.src = 'skate.mp4';
    } if (next == 4) {
        video.src = 'ocean.mp4';
    } else if (next >= 4) {
        next = 0;
    }
}
function switchPrevious(num) {
    next -= 1;
    console.log(next);
    if (next == 1) {
        video.src = 'ballons.mp4';
    } if (next == 2) {
        video.src = 'wheel.mp4';
    } if (next == 3) {
        video.src = 'skate.mp4';
    } if (next == 4) {
        video.src = 'ocean.mp4';
    } if (next <= 0) {
        next = 5;
    }
}


function switchVid(fileName) { 
    video.src = fileName;
}