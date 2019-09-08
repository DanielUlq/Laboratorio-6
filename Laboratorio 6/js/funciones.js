/*funcion que suma dos valores*/
function suma(){
	var numero1 = prompt("Ingrese numero 1:", "...numero1...");
	var numero2 = prompt("Ingrese numero 2:", "...numero2...");
	var suma = parseInt(numero1) + parseInt(numero2);
  		if (suma != null) {
    		document.getElementById("texto").innerHTML = suma;
  		}
}

/*aleatorios*/
function numAleatorio(){
	var cantidadNumeros = parseInt(prompt("Ingrese cantidad de números:", "Ej: 5"));
	var myArray = []
		while(myArray.length < cantidadNumeros ){
  			var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
  			var existe = false;
  			for(var i=0;i<myArray.length;i++){
				if(myArray [i] == numeroAleatorio){
        			existe = true;
        			break;
    			}
  			}
  			if(!existe){
    		myArray[myArray.length] = numeroAleatorio;
  			}

		}
		document.getElementById("result1").innerHTML = "Aleatorio sin Ordenar: " + myArray;
		document.getElementById("result2").innerHTML = "Aleatorio ordenado de menor a mayor: " + myArray.sort(deMenorAMayor);
		document.getElementById("result3").innerHTML = "Aleatorio ordenado de mayor a menor: " + myArray.sort(deMayorAMenor);
/*document.write("números aleatorios : " + myArray);*/
}

function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
function deMayorAMenor(elem1, elem2) {return elem2-elem1;}


/*funcion que calcula el número mayor de dos números*/
function mayor(){
	var num1 = document.getElementById("tex1").value;
	var num2 = document.getElementById("tex2").value;

	if(parseInt(num1)>parseInt(num2)){
		document.getElementById("resultadoMayor").innerHTML = "Número mayor es:" + " " +num1;		
	}else{
		document.getElementById("resultadoMayor").innerHTML = "Número mayor es:" + " " + num2;
	}

}

/*funcion que calcula el número mayor de dos números*/
function menor(){
	var num1 = document.getElementById("tex3").value;
	var num2 = document.getElementById("tex4").value;

	if(parseInt(num1)<parseInt(num2)){
		document.getElementById("resultadoMenor").innerHTML = "Número menor es:" + " " +num1;		
	}else{
		document.getElementById("resultadoMenor").innerHTML = "Número menor es:" + " " + num2;
	}

}

/*compuertas lógicas*/
/*AND*/
function compuertaAND(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}

/*OR*/
function compuertaOR(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}

/*NAND*/
function compuertaNAND(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}

/*NOR*/
function compuertaNOR(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}

/*XOR*/
function compuertaXOR(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}

/*XNOR*/
function compuertaXNOR(){
	var entrada1 = document.getElementById("ent1").value;
	var entrada2 = document.getElementById("ent2").value;

	if(parseInt(entrada1)==0 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else if(parseInt(entrada1)==0 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==0){
		document.getElementById("resultadoComp").innerHTML = " " + "0";
	}else if(parseInt(entrada1)==1 && parseInt(entrada2)==1){
		document.getElementById("resultadoComp").innerHTML = " " + "1";
	}else{
		document.getElementById("resultadoComp").innerHTML = " " + "Revise si escribio bien los números";
	}
}




