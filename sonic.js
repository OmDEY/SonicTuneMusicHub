let sideMenu = document.getElementById("sideMenu")
let hamburger_menu = document.getElementById("hamburger-menu")


hamburger_menu.addEventListener('click', e => {
    sideMenu.classList.remove('active')
    sideMenu.style.boxShadow = "0px 0px 1px 1800px rgba(0, 0, 0, 0.5)"
    e.stopPropagation()
})

document.addEventListener('click', e => {
    if(!sideMenu.contains(e.target) && e.target !== hamburger_menu){
        sideMenu.classList.add('active')
        sideMenu.style.boxShadow = "none"
    }
})

let Favourite = document.getElementById("Favourite")

function Fav(){
    if(Favourite.style.color != "red"){
        Favourite.classList.remove("bi-heart")
        Favourite.classList.add("bi-heart-fill")
        Favourite.style.color = "red";
    }else{
        Favourite.classList.remove("bi-heart-fill")
        Favourite.classList.add("bi-heart")
        Favourite.style.color = "white"
    }
}

// ----------------------------------------------------------------------------------------------------------------
// let progress = document.getElementById("music-progress-bar")
// let song = document.getElementById("song")
// let ctrlIcon = document.getElementById("ctrlIcon")

// song.onloadedmetadata = function(){
//     progress.max = song.duration;
//     progress.value = song.currentTime;
// }

// function playPause(){
//     if(ctrlIcon.classList.contains("bi-pause-circle-fill")){
//         song.pause();
//         ctrlIcon.classList.remove("bi-pause-circle-fill")
//         ctrlIcon.classList.add("bi-play-circle-fill")
//     }else{
//         song.play()
//         ctrlIcon.classList.remove("bi-play-circle-fill")
//         ctrlIcon.classList.add("bi-pause-circle-fill")
//     }
// }

// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500)
// }

// progress.onchange = function(){
//     // if(song.play()){
//     //     song.currentTime = progress.value;
//     // }else{
//     //     song.currentTime = progress.value;
//     // }
//     // if(song.ended()){
//     //     song.currentTime = progress.value;
//     //     song.play()
//     // }
//     if(ctrlIcon.classList.contains("bi-play-circle-fill")){
//         song.pause()
//         song.currentTime = progress.value;
//     }else{
//         song.currentTime = progress.value;
//     }

//     // ctrlIcon.classList.remove("bi-play-circle-fill");
//     // ctrlIcon.classList.add("bi-pause-circle-fill")
//     // song.play();
// }

let p = document.getElementById("ctrlIcon")
let Progress = document.getElementById("music-progress-bar")
let song = document.getElementById("song")

song.onloadedmetadata = function(){
    Progress.max = song.duration;
    Progress.value = song.currentTime;
}
function playPause(){
    if(p.classList.contains("bi-pause-circle-fill")){
        p.classList.remove("bi-pause-circle-fill")
        p.classList.add("bi-play-circle-fill")
        song.pause()

    }else {
        p.classList.remove("bi-play-circle-fill")
        p.classList.add("bi-pause-circle-fill")
        song.play()
    }
}
if(song.play()){
        setInterval(() => {
        Progress.value = song.currentTime;
        }, 500)
    }

Progress.onchange = function(){
    // song.play()
    // p.classList.remove("bi-play-circle")
    // p.classList.add("bi-pause-circle")
    if(p.classList.contains("bi-play-circle")){
        song.pause()
        song.currentTime = Progress.value;
    }else{
        song.currentTime = Progress.value;
    }
}