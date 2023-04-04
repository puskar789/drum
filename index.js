for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     makeSound(this.innerHTML);
     buttonAnimation(this.innerHTML);
   });
}
function makeSound(keypressed)
{
    switch(keypressed)
    {
        case 'w':
        var tom1=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\tom-1.mp3');
        tom1.play();
        break;

        case 'a':
        var tom2=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\tom-2.mp3');
        tom2.play();
        break;

        case 's':
        var tom3=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\tom-3.mp3');
        tom3.play();
        break;

        case 'd':
        var tom4=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\tom-4.mp3');
        tom4.play();
        break;

        case 'j':
        var snare=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\snare.mp3');
        snare.play();
        break;

        case 'k':
        var kick=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\kick-bass.mp3');
        kick.play();
        break;

        case 'l':
        var crash=new Audio('C:\Users\Acer\Documents\DrumProject\sounds\crash.mp3');
        crash.play();
        break;

        default: 
        console.log(keypressed);
    }
}

function buttonAnimation(currentkey)
{
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}