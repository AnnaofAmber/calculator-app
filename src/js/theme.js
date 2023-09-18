const switcherBasic = document.getElementById('basic');
const labelBasic= document.querySelector('.label-basic')

const switcherLight = document.getElementById('light');
const labelLight = document.querySelector('.label-light')

const switcherPurple = document.getElementById('purple');
const labelPurple = document.querySelector('.label-purple')

function onSwitch() {
    if(switcherBasic.checked){
        labelLight.classList.remove('slider-btn')
        labelPurple.classList.remove('slider-btn')
        labelBasic.classList.add('slider-btn')
    }
    if(switcherLight.checked){
        labelBasic.classList.remove('slider-btn')
        labelPurple.classList.remove('slider-btn')
        labelLight.classList.add('slider-btn')
    }

    if(switcherPurple.checked){
        labelBasic.classList.remove('slider-btn')
        labelLight.classList.remove('slider-btn')
        labelPurple.classList.add('slider-btn')
    }
}

switcherBasic.addEventListener('change', onSwitch)
switcherLight.addEventListener('change', onSwitch)
switcherPurple.addEventListener('change', onSwitch)