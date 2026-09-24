let pin = "123"
let intentos = 0
let acceso = false
let saldo = 10000

while (intentos < 3 && !acceso){
    const ingreso = prompt ("Ingrese su PIN")

    if (ingreso === pin){
        acceso = true
        console.log ("Acceso concedido")

        let opcion = ""
        while (opcion !== 4){
            opcion = Number(prompt("1) Ver Saldo  2) Depositar  3) Retirar  4) Salir"))

            switch (opcion){
                case 1:
                    console.log ("Su saldo es de ", saldo, "$")
                    break
                case 2:
                    let deposito = Number(prompt("Ingrese dinero a depositar"))
                    saldo = saldo + deposito
                    console.log ("Usted a depositado ", deposito, "$ y su saldo a quedado en ", saldo, "$")
                    break
                case 3:
                    let retiro
                    do{
                        retiro = Number(prompt("Ingrese dinero a retirar"))

                        if (retiro <= 0){
                            alert("Ingrese un monto valido")
                        }else if (retiro > saldo){
                            alert("Saldo insuficiente")
                        }
                    }while (retiro <= 0 || retiro > saldo)

                    saldo = saldo - retiro
                    console.log ("Usted a retirado ", retiro, "$ y su saldo a quedado en ", saldo, "$")
                    break
                case 4:
                    alert("Has cerrado sesion")
                    break
            }
        }
        
    }else {
        intentos++
        console.log("PIN incorrecto, vuelve a intentarlo, tienes ", 3 - intentos, " intentos")
    }
}

if (!acceso){
    console.log("Te pasaste de intentos, acceso denegado")
}