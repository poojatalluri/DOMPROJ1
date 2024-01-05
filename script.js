let button = document.querySelector('#change_color_btn')
let colorNameText = document.getElementById("color_name_txt")

colorNameText.addEventListener('keyup', setColorName)
let selectedColor;

function setColorName(e){
    selectedColor =  e.target.value
}

button.addEventListener('click',buttonClicked);

function buttonClicked(e){
    console.log('Button Clicked')
    document.body.style.backgroundColor = selectedColor
}