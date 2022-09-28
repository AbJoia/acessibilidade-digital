const body = document.getElementsByTagName('body')[0];
const ul = document.getElementsByTagName('ul');
const li = document.getElementsByTagName('li'); 
const footer = document.getElementsByTagName('footer')[0];  
const header = document.getElementsByTagName('header')[0]; 
const a = document.getElementsByTagName('a');
const h1 = document.getElementsByTagName('h1');
const h2 = document.getElementsByTagName('h2');
const p = document.getElementsByTagName('p');
const imagemPcds = document.getElementById('home-image');
const logoSerratec = document.getElementById('logo-serratec');
const botaoAumentarFonte = document.getElementById('increase');
const botaoDiminuirFonte = document.getElementById('decrease');
const botaoContraste = document.getElementById('contraste');
let darkMode = JSON.parse(localStorage.getItem('darkMode'));

var fontSize = 100
var increaseDecrease = 10

if(darkMode){
    aplicarDarkMode()
}

function aplicarDarkMode(){    
    imagemPcds.src = './assets/img/image3.png';    
    logoSerratec.src = './assets/img/serratecLogoBranco.png';
    botaoAumentarFonte.classList.remove('btn-danger')    
    botaoDiminuirFonte.classList.remove('btn-danger')  

    botaoAumentarFonte.classList.add('dark-mode-style')    
    botaoDiminuirFonte.classList.add('dark-mode-style')    
    botaoContraste.classList.add('invert-colors-dark')        
    
    body.style.backgroundColor = '#111';
    body.style.color = '#FFF';
    
    var headerClassList = header.classList
    headerClassList.remove('bg-light')
    headerClassList.add('dark-mode-style')   

    var footerClassList = footer.classList    
    footerClassList.remove('bg-light')
    footerClassList.add('bg-dark')

    for(var i = 0; i < a.length; i++){
        var classList = a[i].classList
        classList.add('text-light')
        classList.add('dark-mode-style')
    }

    for(var i = 0; i < ul.length; i++){
        var classList = ul[i].classList
        classList.add('dark-mode-style')
    }

    for(var i = 0; i < li.length; i++){
        var classList = li[i].classList
        classList.add('dark-mode-style')
    }

    localStorage.setItem('darkMode', JSON.stringify(true))
}

function removerDarkMode(){    
    imagemPcds.src = './assets/img/image1.png';    
    logoSerratec.src = './assets/img/serratecLogo.png';
    botaoAumentarFonte.classList.add('btn-danger')    
    botaoDiminuirFonte.classList.add('btn-danger')    
    botaoContraste.classList.remove('invert-colors')
    
    botaoAumentarFonte.classList.remove('dark-mode-style')    
    botaoDiminuirFonte.classList.remove('dark-mode-style')    
    botaoContraste.classList.remove('invert-colors-dark')   
    
    body.style.backgroundColor = '#FFF';
    body.style.color = '#000';
    
    var headerClassList = header.classList
    headerClassList.add('bg-light')
    headerClassList.remove('dark-mode-style')   

    var footerClassList = footer.classList    
    footerClassList.add('bg-light')
    footerClassList.remove('bg-dark')

    for(var i = 0; i < a.length; i++){
        var classList = a[i].classList
        classList.remove('text-light')
        classList.remove('dark-mode-style')
    }

    for(var i = 0; i < ul.length; i++){
        var classList = ul[i].classList
        classList.remove('dark-mode-style')
    }

    for(var i = 0; i < li.length; i++){
        var classList = li[i].classList
        classList.remove('dark-mode-style')
    } 

    localStorage.setItem('darkMode', JSON.stringify(false))           
}

function aplicarTema(event){       
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;
    darkMode = JSON.parse(localStorage.getItem('darkMode'))    
    if(!darkMode){
        aplicarDarkMode()
    }
    else{
        removerDarkMode()
    }
}

function aumentarFonte(event){
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;
    fontSize = fontSize + increaseDecrease
    body.style.fontSize = fontSize + '%'

    for(var i=0; i<a.length; i++){
        a[i].style.fontSize = fontSize + '%'
    } 

    if(fontSize > 110){
        for(var i=0; i<p.length; i++){
            p[i].style.fontSize = fontSize + '%'
        }
    }       
    
    if(fontSize > 130){
        for(var i=0; i<h2.length; i++){
            h2[i].style.fontSize = fontSize + '%'
        } 
    }

    if(fontSize > 150){
        for(var i=0; i<h1.length; i++){
            h1[i].style.fontSize = (fontSize + 10) + '%'
        }        
    }
}

function diminuirFonte(event){
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;
    fontSize = fontSize - increaseDecrease    
    body.style.fontSize = fontSize + '%'

    for(var i=0; i<a.length; i++){        
        a[i].style.fontSize = fontSize + '%'
    } 

    for(var i=0; i<h1.length; i++){
        h1[i].style.fontSize = fontSize + '%'
    }
    
    for(var i=0; i<h2.length; i++){
        h2[i].style.fontSize = fontSize + '%'
    }

    for(var i=0; i<p.length; i++){
        p[i].style.fontSize = fontSize + '%'
    }
}
