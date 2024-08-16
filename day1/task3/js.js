var songs = [
  {
    song: "Super Mario Bros (NES) Music - Overworld Theme.mp3",
    image: "./images/0.jpeg",
    Shortname: "super Maria",
  },
  {
    song: "AFROTO - MAREED _ عفروتو - مريض (OFFICIAL LYRICS VIDEO) PROD BY MARWAN MOUSSA(MP3_160K).mp3",
    image: "./images/1.jpeg",
    Shortname: "afroto - mareed",
  },
  {
    song: "Abyusif -عزرائيل (MP3_320K).mp3",
    image: "./images/2.jpeg",
    Shortname: "Abyusif - 3zra2el",
  },
  {
    song: "Lege-Cy - Mafesh Mane3 _ ليجي-سي - مفيش مانع (Official Audio)(MP3_320K).mp3",
    image: "./images/3.jpeg",
    Shortname: "LegeCy -  Mafesh Mane3",
  },
];
var currentSong = 0;
var audio = document.getElementsByTagName("audio")[0];
var volumeRng = document.getElementById("volume");
var playRng = document.getElementById("playSound");
var song = document.getElementsByClassName("song")[0];
var img = document.getElementsByTagName("img")[0];

function play() {
  audio.play();
}
function pause() {
  audio.pause();
}
function stop() {
  audio.load();
  audio.pause();
}
function volumeChange() {
  audio.volume = volumeRng.value;
}

audio.addEventListener("loadedmetadata", function () {
  playRng.max = audio.duration;
});
audio.addEventListener("timeupdate", function () {
  playRng.value = audio.currentTime;
});
playRng.addEventListener("input", function () {
  audio.currentTime = playRng.value;
});
function chooseSong(index) {
  audio.src = songs[index].song;
  audio.play();
  img.src = songs[index].image;
}
function createButtons() {
  var table = document.querySelector("table");
  // var buttonRow = document.getElementById("buttonRow");

  for (let i = 0; i < songs.length; i++) {
    const button = document.createElement("button");
    button.textContent = `${songs[i].Shortname}`;
    button.addEventListener("click", () => chooseSong(i));
    const buttonRow = document.createElement("tr");
    table.appendChild(buttonRow);
    buttonRow.appendChild(button);
  }
}
document.addEventListener("DOMContentLoaded", createButtons);
