
document.querySelector('.NORMY').addEventListener('click', Normal)
document.querySelector('.OILYY').addEventListener('click', Oily)
document.querySelector('.COMBY').addEventListener('click', Combination)
document.querySelector('.DRIEY').addEventListener('click', Dry)



function Normal(){

    document.querySelector('.flexContainer1').classList.toggle('hidden')    
}

function Oily(){
    document.querySelector('.flexContainer2').classList.toggle('hidden')
}

function Combination(){
    document.querySelector('.flexContainer3').classList.toggle('hidden')
}

function Dry(){
    document.querySelector('.flexContainer4').classList.toggle('hidden')
}