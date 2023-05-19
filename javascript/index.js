videoControl();

function videoControl(){
    let video = document.getElementById("gameplay");

    video.addEventListener("click", () => {
        if (video.paused){
            video.play();
        } else{
            video.pause();
        }
    });
}

