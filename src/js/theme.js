const body = document.querySelector('body')

const switcherBasic = document.getElementById('basic');
const labelBasic= document.querySelector('.label-basic')

const switcherLight = document.getElementById('light');
const labelLight = document.querySelector('.label-light')

const switcherViolet = document.getElementById('violet')
const labelViolet = document.querySelector('.label-violet')


function onSwitch() {
    if(switcherBasic.checked){
        labelLight.classList.remove('slider-btn')
        labelViolet.classList.remove('slider-btn')
        labelBasic.classList.add('slider-btn')
        onBasic()
    }
    if(switcherLight.checked){
        labelBasic.classList.remove('slider-btn')
        labelViolet.classList.remove('slider-btn')
        labelLight.classList.add('slider-btn')
        onLight()
    }

    if(switcherViolet.checked){
        labelBasic.classList.remove('slider-btn')
        labelLight.classList.remove('slider-btn')
        labelViolet.classList.add('slider-btn')
    }
}

switcherBasic.addEventListener('change', onSwitch)
switcherLight.addEventListener('change', onSwitch)
switcherViolet.addEventListener('change', onSwitch)


function onBasic(){
body.classList.remove('body-light')
}

function onLight(){
body.classList.add('body-light')

}

function onViolet(){

}