//saludo proyecto


function inicio (nombre,apellido,ciudad){
    console.log(`Bienvenido señor: ${nombre} ${apellido} lo estamos viendo desde la ciudad de: ${ciudad}`)
}
inicio(prompt('ingrese su nombre'),prompt('ingrese su apellido'),prompt('ingrese su ciudad'));