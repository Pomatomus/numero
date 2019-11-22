// Adivina el Número 11/10/2019

// Globales
var numegen=[0,0,0,0];
var intentos=0;
var lsIntentos=0;

// Inicio
function iniciar(){
	document.getElementById('inicio').addEventListener('click', comenzar, false);
	//document.getElementById('ok').addEventListener('click', comprobar, false);
	document.getElementById('n1').addEventListener('click', teclea1, false);
	document.getElementById('n2').addEventListener('click', teclea2, false);
	document.getElementById('n3').addEventListener('click', teclea3, false);
	document.getElementById('n4').addEventListener('click', teclea4, false);
	document.getElementById('n5').addEventListener('click', teclea5, false);
	document.getElementById('n6').addEventListener('click', teclea6, false);
	document.getElementById('n7').addEventListener('click', teclea7, false);
	document.getElementById('n8').addEventListener('click', teclea8, false);
	document.getElementById('n9').addEventListener('click', teclea9, false);
	comenzar();
} 

function comenzar() {
  var n=0;
  var i=0;
  var h=0;
  var e=false;
  var pie=document.getElementsByClassName('pie')[0];
  var col1=document.getElementById('col1');
  var col2=document.getElementById('col2');
  var col3=document.getElementById('col3');
  var col4=document.getElementById('col4');
  lsIntentos=localStorage.getItem('lsIntentos');
  if(lsIntentos== null) {
    lsIntentos=0;
  } 
  while (i < 4) {
    n=getn();
	e=false;
	for (h = 0; h <= i; h++) {
	  if (n==numegen[h]) {
        e=true;
	  } 		  
	}
	if (e==false) {
	  numegen[i]=n;
      i++;	  
	}
  } 
  
  pie.innerHTML="<p> Numero: ****  Mejor Resultado: "+lsIntentos+"</p>";
  intentos=0;
  col1.innerHTML="";
  col2.innerHTML="";
  col3.innerHTML="";
  col4.innerHTML="";
  
  //document.getElementById('ntecle').focus();
} 

function getn() {
  var max=10;
  var min=1;
  return Math.floor(Math.random() * (max - min)) + min;	
}

function teclea1() { teclea(1);}
function teclea2() { teclea(2);}
function teclea3() { teclea(3);}
function teclea4() { teclea(4);}
function teclea5() { teclea(5);}
function teclea6() { teclea(6);}
function teclea7() { teclea(7);}
function teclea8() { teclea(8);}
function teclea9() { teclea(9);}

function teclea(d) {
  var nt=document.getElementById('ntecle');//.value;
  var existe= false;
  for (var i = 0; i < nt.value.length; i++) {
    if (nt.value[i]==d) { existe=true; } 
  }
  if (!existe) { nt.value+=d; }	
  if (nt.value.length > 3) { comprobar() }
  //console.log(nt.value.length);	
}

function comprobar() {
  var nt=document.getElementById('ntecle').value;
  var col1=document.getElementById('col1');
  var col2=document.getElementById('col2');
  var col3=document.getElementById('col3');
  var col4=document.getElementById('col4');
  var h=0;
  var m=0;
  var datos="";
  if (nt>1111) {
   for (var i = 0; i < 4; i++) {
    //console.log(nt[i]);
	for (var j= 0; j < 4; j++) {
      if (nt[i]==numegen[j]) {
        if (i==j) {
		  m+=1;;	
		} else {
		  h+=1;	
		}
	  }
    }	
   }
  
   intentos++;
   col1.innerHTML= "<p>"+ nt +"</p>"+col1.innerHTML;
   col2.innerHTML= "<p>"+ m +"</p>"+col2.innerHTML;
   col3.innerHTML= "<p>"+ h +"</p>"+col3.innerHTML;
   col4.innerHTML= "<p>"+ intentos +"</p>"+col4.innerHTML;
   document.getElementById('ntecle').value="";
  }
  //document.getElementById('ntecle').focus();
  
  if (m==4){
	  finjuego();
  } 
}

function finjuego() {
  var pie=document.getElementsByClassName('pie')[0];
  if (lsIntentos==0 || intentos<lsIntentos) {
	  lsIntentos=intentos;
	  localStorage.setItem('lsIntentos',lsIntentos);
  }
  pie.innerHTML="<p> Nuemro: "+ numegen +" Intentos: "+intentos+" Mejor resultado: "+lsIntentos+" </p>";
  window.alert("!!! Correcto ¡¡¡");	
}

window.addEventListener('load', iniciar, false);