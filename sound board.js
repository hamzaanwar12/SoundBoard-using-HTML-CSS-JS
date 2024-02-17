let soundMarks = document.querySelectorAll(".soundMark")
let sounds = ["applause","boo","gasp","tada","victory","wrong"]
let mediaPlayer = null
console.log(soundMarks)

let checkElement = (sound)=>
{
    let element;
    switch(sound)
    {
        case sounds[0]:
            element = new Audio("applause.mp3")
        break;

        case sounds[1]:
            element = new Audio("boo.mp3")
        break;
        
        case sounds[2]:
            element = new Audio("gasp.mp3")
        break;
        
        case sounds[3]:
            element = new Audio("tada.mp3")
        break;
        
        case sounds[4]:
            element = new Audio("victory.mp3")
        break;

        case sounds[5]:
            element = new Audio("wrong.mp3")
        break
    }

    return element
}

for(let i=0;i<soundMarks.length;i++)
{
    soundMarks[i].addEventListener("click",()=>
    {
        if(mediaPlayer!=null)
        {
            mediaPlayer.pause()
        }
        mediaPlayer = checkElement(sounds[i])
        mediaPlayer.play()

    })
        
}