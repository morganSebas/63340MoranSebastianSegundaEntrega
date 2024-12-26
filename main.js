let iva =21
let intereses = 78
let impoprte = 0
let cuotas = 0

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

 cuotas = parseInt(prompt("Ingrse la cantidad de cuotas, puede ser  12, 24, 36, 48"))
 if (cuotas ==0 && cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48  ) {
    while (cuotas != 0 && cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas !=  48 ) {
        alert("Debe ingresar cuotas de 12, 24, 36 o 48")
        cuotas = parseFloat( prompt("Ingrese el monto a Solicitar"))
    }
  } 
}

const   calculoCuota = (cantCuota ) => 
{
     let importeCuota = (importe/cantCuota)

     let importeConInteres = importeCuota  + (importeCuota * (1 +(intereses/100)))

     let ImporteCuotaConIVa = importeConInteres *  ( 1 + 21/100)


    for (let cuota = 1; cuota <=cuotas; cuota++){
    console.log( "Cuota: " + cuota + " Importe: " + ImporteCuotaConIVa )
    }
}





function mostrarMenu() {
    let opcion;
  
    do {
      opcion = prompt(
        " Ingrese una opción: \n\n1 - Ingrse el monto en pesos a solicitar\n2 - Ingrese la cantidad de cuotas: 12 24 36 48 \n3 - Ver lisado de pagos\n4 - Salir"
      );
      switch (opcion) {
        case "1":
            seleccionaImporte();
          break;
        case "2":
          seleccionaCuotas();
          break;
        case "3":
            calculoCuota(cuotas)
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