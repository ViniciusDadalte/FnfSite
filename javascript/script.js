let fundo = document.querySelector('.personagem');
let persona = document.getElementById('personagem');
let fot = document.getElementById('fot');
let botao = document.getElementById('botaoGostoso');
let titulo = document.getElementById('titulo');
let paragrafo = document.getElementById('paragrafoGostoso');
let body = document.getElementById('bora');
let logo = document.getElementById('logo');
let link = document.getElementById('link');
let icon = document.getElementById('icone');

function perereca1(){
  persona.src = 'images/bf.gif';
  fot.style.background = '#0000CD';
  botao.style.background = '#9400D3';
  fundo.style.background = '#00BFFF';
  titulo.style.color = 'black';
  titulo.innerHTML = `
     
        Não é apenas o melhor jogo é 
     
        <span style="
        color: #FF1493;
        font-size:60px;
        font-weight: 900;
        "> 
        
        FNF
        
        </span>`;
  paragrafo.style.color = 'black';
  paragrafo.innerText = `A história do "Friday Night Funkin'" é centrada em torno do personagem chamado Boyfriend, que está tentando impressionar a namorada enfrentando diversos oponentes em duelos musicais.`;
  body.style.background = ``;
  botao.innerText = 'FNF :D'
  logo.src = 'images/logo.png';
  fot.style.color = 'white';
  link.href = 'https://gamebanana.com/mods/309789';
  icone.href = 'images/logo.png';
}
function perereca2(){
  persona.src = 'images/kapi.gif';
  fot.style.background = '#B0C4DE';
  botao.style.background = '#9400D3';
  fundo.style.background = '#FF1493';
  titulo.style.color = 'white';
  titulo.innerHTML = `
     
        Não é FNF é 
     
        <span style="
        color: #FFFF00;
        font-size:60px;
        font-weight: 900;
        "> 
        
        FNF Arcade Showdown
        
        </span>`;
  paragrafo.style.color = 'white';
  paragrafo.innerText = `A história do "FNF Arcade Showdown" é centrada em torno do personagem chamado Boyfriend, que está tentando impressionar a namorada enfrentando o oponente kapi, um gato que quer roubar sua namorada. E eles se resolvem em duelos musicais.`;
  body.style.background = `#778899`;
  botao.innerText = 'Arcade Showdow ^_^';
  logo.src = 'images/logo-kapi.jpg';
  fot.style.color = 'black';
  link.href = 'https://gamebanana.com/mods/44683';
  icone.href = 'images/logo-kapi.jpg';
}
function perereca3(){
  persona.src = 'images/trick.gif';
  fot.style.background = '#A52A2A';
  botao.style.background = '#DC143C';
  fundo.style.background = '#B22222';
  titulo.style.color = 'white';
  titulo.innerHTML = `
     
        Não é FNF é 
     
        <span style="
        color: red;
        font-size:60px;
        font-weight: 900;
        "> 
        
        FNF VS Tricky
        
        </span>`;
  paragrafo.innerText = `A história do "FNF VS Tricky" é centrada em torno do personagem chamado Boyfriend, que está tentando impressionar a namorada enfrentando o oponente Tricky, um palhaço da serie madness combat, que quer matar ele e sua namorada. E eles se resolvem em duelos musicais.`;
  body.style.background = `black`;
  botao.innerText = 'VS Tricky !_!';
  logo.src = 'images/trick-logo.jpg';
  fot.style.color = 'white';
  paragrafo.style.color = 'white';
  link.href = 'https://gamebanana.com/mods/44334';
  icone.href = 'images/trick-logo.jpg';
}