const music = document.querySelector("audio");
const play = document.getElementById("play");
document.getElementById('audio').play();
play.addEventListener("click" , () => {
    music.play();
});