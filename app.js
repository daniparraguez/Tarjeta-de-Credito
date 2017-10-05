function validCreditCard(num){
	 var iNum= parseInt(prompt("Hola! Ingrese el número de su tarjeta de crédito:"));
	 var sE = "";
     var iNumToArr= iNum.split(sE); // número a array
     var toReverse= iNumToArr.reverse(); //array inverso
     for(i=0; i<toReverse.length;i++){
     	if(toReverse[i]% 2===0){
     		var newNum= i*2;
     		if(newNum>=10){
     			var newNumSum= 
     		}
     	}
     }
}