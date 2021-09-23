var score = 0;

function count(num) {
    score = score + num;

     //querySelector always gets the first element only, querySelector is an alternative to getelementbyId
    if (score < 0){
        score = 0;
    } 

    document.querySelector("h1").innerHTML = score; //always do the checking first then only do the logic

    if(score > 10 && score < 20) {
        document.querySelector("#container").style.backgroundColor = 'silver';
    } else if (score > 20 && score < 30) {
        document.querySelector('#container').style.backgroundColor = 'gold';
    } else{
        document.querySelector('#container').style.backgroundColor ='white';
    }

} //count function scope

function changeBg(bgColor) {
    document.querySelector('.color-btn').style.backgroundColor = bgColor;
}

// function overBtn() {
//     document.querySelector('.color-btn').style.backgroundColor = 'gray';
// }

function upBtn() {
    document.querySelector('.color-btn').style.backgroundColor = 'white';
}

function leftBtn() {
    document.querySelector('.color-btn').style.backgroundColor = 'red';
}
function rightBtn() {
    document.querySelector('.color-btn').style.backgroundColor = 'green';
}

document.getElementById('red-btn').addEventListener('mouseover',overBtn);

function overBtn (evt) {
    this.style.backgroundColor = 'yellow';
}