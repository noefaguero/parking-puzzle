// Frecuencia de actualización
const FPS = 30
// Variables globales para drag and drop
let isMouseDown = false
let start_x // coordenada x del click
let start_y // coordenada y del click
let target // objeto pulsado
let n = 1 // numero de casillas que se desplaza

/******************** DIBUJAR OBJETOS ***********************/

// Cargar array vehiculos (objetos) siguiendo el mapa (array)
const loadMap = (map) => {
    let cars = []
    for (let y = 0; y < map.length - 1; y++) {
        for (let x = 0; x < map[y].length - 1; x++) {
            if (map[y][x]) { // 0 es falsy
                let car = new Car(map[y][x], x, y)
                cars.push(car)
            }
        }
    }
    return cars
}

const removeCanvas = () => {
    canvas.width = width_canvas
    canvas.height = height_canvas
}


const drawCanvas = (cars) => {
    cars.forEach(car => {
        car.draw()
    })
}

const update = (cars) => {
    removeCanvas()
    drawCanvas(cars)
}

const run = () => {
    cars = loadMap(MAPS[0])
    setInterval(() => update(cars), 1000 / FPS)
}

/************************** ARRASTRAR Y SOLTAR *****************************/

const checkClick = (x, y, car) => {
    if (
        x > car.pos_x*cell && // limite izquierda
        x < car.pos_x*cell + car.w/70*cell && // limite derecha
        y > car.pos_y*cell && // limite superior
        y < car.pos_y*cell + car.h/70*cell // limite inferior
    ) {
        return true
    }
    return false
}


const catchHandler = (event) => {
    isMouseDown = true
    // Coordenadas del click relativas al canvas
    start_x = event.offsetX
    start_y = event.offsetY

    let i = 0
    // Comprobar si las coordenadas coinciden con un vehiculo
    while (i < cars.length && !checkClick(start_x, start_y, cars[i])) {
        i++
    }
    // Si ha salido del bucle por llegar al final, acaba la función
    if (i == cars.length) return
    // Asignar target 
    if (i < cars.length) {
        target = cars[i]
        console.log(target)
    }
}

const dragHandler = (event) => {
    if (!isMouseDown) return
    // Coordenadas del cursor relativas al canvas
    const mouse_x = event.offsetX
    const mouse_y = event.offsetY
    // Distacia de arrastre en cada eje
    const dx = mouse_x - start_x
    const dy = mouse_y - start_y
    // Si el objeto seleccionado se puede arrastrar en horizontal
    // y se ha arrastrado una distacia equivalente a una celda en el eje x
    if (target.drag && target.horizontal && Math.abs(dx) > cell*n) {
        n++
        dx > 0 ? target.pos_x++ : target.pos_x--
    }
    // Si el objeto seleccionado se puede arrastrar en vertical
    // y se ha arrastrado una distacia equivalente a una celda en el eje y
    if (target.drag && !target.horizontal && Math.abs(dy) > cell*n) {
        n++
        dy > 0 ? target.pos_y++ : target.pos_y--
    }
}


const dropHandler = () => {
    if (isMouseDown) {
        isMouseDown = false
        n = 1 // reset
    }
    console.log("drop")
}

/********************************* EVENTOS **********************************/

document.addEventListener('DOMContentLoaded', () => {
    initCanvas()
    run()
    canvas.addEventListener('mousedown', (event) => catchHandler(event))
    canvas.addEventListener('mousemove', (event) => dragHandler(event))
    canvas.addEventListener('mouseup', dropHandler)
})

