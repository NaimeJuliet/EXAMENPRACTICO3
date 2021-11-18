const ej1button = document.querySelector("#ej1button")
if(ej1button){
    ej1button.addEventListener('click' , function(event) {
        const ej1placa = document.querySelector('#ej1placa')
        const ej1pasajeros = document.querySelector('#ejpasajeros')
        const ej1ruta = document.querySelector('#ej1ruta')
        const ej1result = document.querySelector('#ej1result')

        if(ej1placa && ej1pasajeros && ej1ruta && ej1result){
            let placaValue = ej1placa.value
            let pasajerosvalue = Number(ej1pasajeros.value)
            let priceValue = Number(ej1price.value)
            var msg = ""

            if(placaValue == '' || subjectsValue == '' || priceValue == ''){
                msg = 'Please fill fields'
            }else{
                let total = calculate(subjectsValue, priceValue)
                msg = 'Hi ' + nameValue + '. Please to pay ' + total
                cleanFields()  
            } 
            ex1result.textContent = msg
        }else{
            alert('Error')
        }
    })
}