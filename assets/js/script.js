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
const span = document.getElementsByTagName('span');
const label = document.getElementsByTagName('label');
const input = document.getElementsByTagName('input');
const textarea = document.getElementsByTagName('textarea');
const topButton = document.getElementById('top-button');
let darkMode = JSON.parse(localStorage.getItem('darkMode'));

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

    for(var i = 0; i < input.length; i++){
        var classList = input[i].classList
        classList.add('text-light')
        classList.add('bg-dark')
    }

    for(var i = 0; i < textarea.length; i++){
        var classList = textarea[i].classList
        classList.add('text-light')
        classList.add('bg-dark')
    }

    for(var i = 0; i < ul.length; i++){
        var classList = ul[i].classList
        classList.add('dark-mode-style')
    }

    for(var i = 0; i < h1.length; i++){
        var classList = h1[i].classList
        classList.add('dark-mode-style')
    }

    for(var i = 0; i < h2.length; i++){
        var classList = h2[i].classList
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

    for(var i = 0; i < input.length; i++){
        var classList = input[i].classList
        classList.remove('text-light')
        classList.remove('bg-dark')
    }

    for(var i = 0; i < textarea.length; i++){
        var classList = textarea[i].classList
        classList.remove('text-light')
        classList.remove('bg-dark')
    }

    for(var i = 0; i < h1.length; i++){
        var classList = h1[i].classList
        classList.remove('dark-mode-style')
    }

    for(var i = 0; i < h2.length; i++){
        var classList = h2[i].classList
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

    for(var i=0; i<a.length; i++){
        var style = window.getComputedStyle(a[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        a[i].style.fontSize = (+fontSize + 1) + 'px'
    } 

    for(var i=0; i<h1.length; i++){
        var style = window.getComputedStyle(h1[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        h1[i].style.fontSize = (+fontSize + 1) + 'px'
    }
    
    for(var i=0; i<h2.length; i++){
        var style = window.getComputedStyle(h2[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        h2[i].style.fontSize = (+fontSize + 1) + 'px'
    }

    for(var i=0; i<p.length; i++){
        var style = window.getComputedStyle(p[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        p[i].style.fontSize = (+fontSize + 1) + 'px'
    } 
    
    for(var i=0; i<li.length; i++){
        var style = window.getComputedStyle(li[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        li[i].style.fontSize = (+fontSize + 1) + 'px'
    } 

    for(var i=0; i<li.length; i++){
        var style = window.getComputedStyle(li[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        li[i].style.fontSize = (+fontSize + 1) + 'px'
    }

    for(var i=0; i<label.length; i++){
        var style = window.getComputedStyle(label[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        label[i].style.fontSize = (+fontSize + 1) + 'px'
    }

    for(var i=0; i<span.length; i++){
        var style = window.getComputedStyle(span[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        span[i].style.fontSize = (+fontSize + 1) + 'px'
    }
}

function diminuirFonte(event){
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;

    for(var i=0; i<a.length; i++){
        var style = window.getComputedStyle(a[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        a[i].style.fontSize = (fontSize - 1) + 'px'
    } 

    for(var i=0; i<h1.length; i++){
        var style = window.getComputedStyle(h1[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        h1[i].style.fontSize = (fontSize - 1) + 'px'
    }
    
    for(var i=0; i<h2.length; i++){
        var style = window.getComputedStyle(h2[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        h2[i].style.fontSize = (fontSize - 1) + 'px'
    }

    for(var i=0; i<p.length; i++){
        var style = window.getComputedStyle(p[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        p[i].style.fontSize = (fontSize - 1) + 'px'
    }

    for(var i=0; i<li.length; i++){
        var style = window.getComputedStyle(li[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        li[i].style.fontSize = (+fontSize - 1) + 'px'
    } 

    for(var i=0; i<label.length; i++){
        var style = window.getComputedStyle(label[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        label[i].style.fontSize = (+fontSize - 1) + 'px'
    }

    for(var i=0; i<span.length; i++){
        var style = window.getComputedStyle(span[i], null);
        var fontSize = style.getPropertyValue('font-size').split('px')[0];                            
        span[i].style.fontSize = (+fontSize - 1) + 'px'
    }
}

window.addEventListener("scroll", function(){
    if(window.scrollY > 800){
        var button = topButton.classList  
        button.remove("hidden-object")
        button.add("slideInRight")
    } 
    
    if(window.scrollY < 200){
        var button = topButton.classList  
        button.add("hidden-object")
        button.remove("slideInLeft")
    }
})

function scrollToTop(event){
    if(event instanceof KeyboardEvent && event.key !== 'Enter') return;
    window.scrollTo({
        top: 0
    })
}

botaoDiminuirFonte.onclick = diminuirFonte;
botaoDiminuirFonte.onkeyup = () => diminuirFonte;
botaoAumentarFonte.onclick = aumentarFonte;
botaoAumentarFonte.onkeyup = () => aumentarFonte;
botaoContraste.onclick = aplicarTema;
botaoContraste.onkeyup = () => aplicarTema;
topButton.onclick = scrollToTop;
topButton.onkeyup = () => scrollToTop;



