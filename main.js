let iva =21
let intereses = 78
let impoprte = 0
let cuota =0;
let cuotass = [12,24,12,36,48]

let planCuotas = [] 

/*function planCuotas(cuotaPlan,cuotaPlan){
  this.cuotaPlan =pCuota;
  this.importeCuota = pImporte;
}*/

const seleccionaImporte =() => {
    importe = parseFloat( prompt("Ingrese el monto a Solicitar: "))
if (importe == 0) {
    while (importe != 0 ) {
            alert("Debe ingresar un importe mayor a 0")
            importe = parseFloat( prompt("Ingrese el monto a Solicitar"))
        }
    }
}

 const seleccionaCuotas =()=>  {

  cuota = parseInt(prompt("Ingrse la cantidad de cuotas"))
 
      while (cuotass.indexOf(cuota) === -1 ) {
        alert("Debe ingresar cuotas de 12, 24, 36 o 48")
        cuota = parseFloat( prompt("Ingrese el monto a Solicitar"))
    }
  } 


const   calculoCuota = (cantCuota ) => 
{
     let importeCuota = (importe/cantCuota)

     let importeConInteres = importeCuota  + (importeCuota * (1 +(intereses/100)))

     let ImporteCuotaConIVa = importeConInteres *  ( 1 + 21/100)


    for (let itemCuota = 1; itemCuota <=cuota; itemCuota++){
      
     planCuotas.push({cuotaPlan:itemCuota,importeCuota:importeConInteres})
    }
    
 

 planCuotas.forEach((f) => {
  console.log( "Cuota Nro:" + f.cuotaPlan + "  Importe Cuota:" + f.importeCuota  );
 })
}

function mostrarMenu() {
    let opcion;
  
    do {
      opcion = prompt(
        " Ingrese una opción: \n\n1 - Ingrse el monto en pesos a solicitar\n2 - Ingrese la cantidad de cuotas a solicitar \n3 - Ver lisado de pagos\n4 - Salir"
      );
      switch (opcion) {
        case "1":
            seleccionaImporte();
          break;
        case "2":
          seleccionaCuotas();
          break;
        case "3":
            calculoCuota(cuota)
          break;
        case "4":
          alert("Gracias. Vuelva pronto.");
          break;
        default:
          alert("Opción incorrecta");
          break;
      }
    } while (opcion !== "4")
}

mostrarMenu()