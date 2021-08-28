const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title') 

//Song titles 
const songs = ['Sunshine and Butterflies', 'Last Cup of Coffee', 'Foreverland']

//Keep track of songs 
let songIndex = 2 

//Initially load song info 
loadSong(songs[songIndex])

//Update song details 
function loadSong(song) {
    title.innerText = song 
    audio.src = `audio/${song}.mp3`
}


