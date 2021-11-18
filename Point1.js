
let placa = prompt('Ingrese la placa del bus')
let ptransportados = prompt('Ingrese el numero de pasajeros transportados')
let Ruta = prompt('Ingrese la ruta donde presto el servicio A/B')

if(Ruta == 'A'){
    let valortotal= ptransportados * 1200
    alert(valortotal)
    console.log(valortotal)
}
    else if(Ruta == 'B'){
        let valortotal= ptransportados * 1000
        alert(valortotal)
        console.log(valortotal)
    }
alert("la placa" + placa + " con" + ptransportados + " recolecto un total de "+ valortotal)
