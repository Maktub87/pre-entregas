



function nombreUsuario() {
        let bienvenido = prompt("Ingresa tu nombre")

        if (bienvenido == "lautaro") {
                alert("Bienvenido " + bienvenido + " crack😎✌")
        } else {
                alert("No se quien sos, espero que te guste 😉⚽")
        }
        alert("Veamos cuanto sabes del 10, empecemos")
}


function preguntasBasicas() {
        let pregunta1 = prompt("1-¿Cual es el nombre completo de messi?")

        if (pregunta1 == "andres lionel messi") {
                alert("tu respuesta es correcta 👌")
        } else {
                alert("no rey de que planeta venís?😖")
        }

        let pregunta2 = prompt("2-¿En que club debutó?")
        if (pregunta2 == "barcelona") {
                alert("Al parecer algo sabes 🤣😂")

        } else {
                alert("Segui participando rey 👻")
        }

        let pregunta3 = prompt("3-¿Quien es su idoló?")
        if (pregunta3 == "pablo aimar") {
                alert("Excelente ⚽🏆")
        } else {
                alert("Mmmm... creo que no te gusta el futbol ")
        }
}



function susTitulos() {

        alert("Un poco de numeros sobre el god")

        let identificar = true
        let intentos = 1

        do {
                let titulos = prompt("¿cuantos titulos oficiales ganó?")
                if (titulos === null) {
                        break
                }

                if (titulos == 44 && intentos <= 3) {
                        alert("Si rey, vos si que sabes ")
                        identificar = false
                } else {
                        alert("no paa , investiga mas... ")
                        intentos++
                        if (intentos > 3) {
                                alert("muchos intentos, perdiste")

                                break
                        }
                }

        } while (identificar)
}



function subasta(){
alert("Por ultimo estamos subastando una camiseta autografiada por el goat ")
let ofertaBase = 40000


let ofertaDelUsuario = parseInt( prompt("ingresa tu oferta"))
if (ofertaDelUsuario < 20000) {
        
        alert("olvidate, tu oferta es muy baja rey")
} else if (ofertaDelUsuario < 30000 && ofertaDelUsuario > 20000) {
        
        alert("La firma del 10 vale un poco más")
} else if (ofertaDelUsuario > 40000 ) {
        
        
        alert("es aceptable asique en breve coordinamos los detalles de entrega ")
} 

}






nombreUsuario()

preguntasBasicas()

susTitulos()

subasta()
