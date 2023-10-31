
//Hola profe trate de agregar todo lo visto en base a mi idea , como vi que todos hacian calculadora subasta y venta de productos trate de hacer algo diferente espero sirva , y sino me esforzare mas para la proxima pre-entrega con alguna idea nueva. Muchas gracias //



let respuestasCorrectas = 0

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

        if (pregunta1.toLowerCase() === "andres lionel messi") {
                alert("Tu respuesta es correcta 👌")
                respuestasCorrectas++
        } else {
                alert("no rey de que planeta venís?😖")
        }

        let pregunta2 = prompt("2-¿En que club debutó?")
        if (pregunta2 == "barcelona") {
                alert("Al parecer algo sabes 🤣😂")
                respuestasCorrectas++

        } else {
                alert("Segui participando rey 👻")
        }

        let pregunta3 = prompt("3-¿Quien es su idoló?")
        if (pregunta3 == "pablo aimar") {
                alert("Excelente ⚽🏆")
                respuestasCorrectas++
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

function mostrarResultado() {
        alert(`Respondiste ${respuestasCorrectas} preguntas correctamente.`);
}


function subasta() {
        alert("Por ultimo estamos subastando una camiseta autografiada por el goat ")
        let ofertaBase = 40000


        let ofertaDelUsuario = parseInt(prompt("ingresa tu oferta"))
        if (ofertaDelUsuario < 20000) {

                alert("olvidate, tu oferta es muy baja rey")
        } else if (ofertaDelUsuario < 30000 && ofertaDelUsuario > 20000) {

                alert("La firma del 10 vale un poco más")
        } else if (ofertaDelUsuario > 40000) {


                alert("es aceptable asique en breve coordinamos los detalles de entrega ")
        }

}






nombreUsuario()

preguntasBasicas()

mostrarResultado()

susTitulos()

subasta()
