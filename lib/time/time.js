/*This clock will need Three #id on the page: "saludar","fecha" and "hora" */

	var time= new Date(),
	    hora= time.getHours(),
	    minuto=time.getMinutes(),
	    diaSemana= time.getDay(),
	    diaFecha= time.getDate(),
	    numMes=time.getMonth(),
	    año=time.getFullYear(),
	
	    
	    semana=new Array('Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'),
	    mes= new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'),
	    saludar=document.getElementById('saludar'),
	    fecha=document.getElementById('fecha'),
	    horaMuestra=setInterval(reloj,1000),
	    muestraFecha=fecha.innerText=semana[diaSemana] + ", " + diaFecha + " de " + mes[numMes] + " de " + año +".";


	    if (hora<11 ) {
	    	saludar.innerText="buenos dias "
	    } else if (hora<19) 
	    {saludar.innerText="buenas tardes "
		} else  {saludar.innerText="buenas noches "}


function reloj() {
	    var date=new Date(),
		hrs24=date.getHours(),
		hrs12= localTime( date.getHours() ),
		min= cero( date.getMinutes() ),
		sec= cero( date.getSeconds() ),
		amPm=(hrs24<12)? 'am':'pm',
		msj=`${cero(hrs12)}:${min}:${sec} ${amPm}`;

		//console.log(msj) 
		
		function cero(num) {
			return (num<10)? ('0'+ num): num
		}
		function localTime(num) {
			if (num==0) {
				num=num+12
			}else if(num>12){
				num=num-12
			}else{
				num=num
			}

			return num
		}
    document.getElementById("hora").innerHTML = msj;
	}
		
	
	    
	    




	    
