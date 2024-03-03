// Variables globales
let canvas
let ctx
let width_canvas = 840
let height_canvas = 420
let cars // array de objetos de la clase Car
let cell // tamaño de casilla

const resizeCanvas = (canvas) => {
    canvas.width = canvas.parentElement.offsetWidth - 30 // ancho del contenedor
    canvas.height = canvas.width / 2
    width_canvas = canvas.width
    height_canvas = canvas.height
    // Asignar tamaño actual de cada casilla del canvas (6x12)
    cell = width_canvas / 12
}

const initCanvas = () => {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    resizeCanvas(canvas)
}


window.addEventListener('resize', () => resizeCanvas(canvas))