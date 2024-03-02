const width_canvas = 840
const height_canvas = 420
const FPS = 60

const removeCanvas = () => {
    canvas.width = width_canvas
    canvas.height = height_canvas
}

const update = (cars) => {
    removeCanvas()
    drawCanvas(cars)
}

// Cargar array vehiculos (objetos) siguiendo el mapa (array)
const loadMap = (map) => {
    let cars = []
    for (let x = 0; x < map.length - 1; x++) {
        for (let y = 0; y < map[x].length - 1; y++) {
            if (map[x][y]) { // 0 es falsy
                let car = new Car(map[x][y], x, y)
                cars.push(car)
            }
        }
    }
    return cars
}

const drawCanvas = (cars) => {
    cars.forEach(car => {
        car.draw()
    })
}

const run = () => {
    const cars = loadMap(MAPS[0])
    setInterval(() => update(cars), 400)
}

/********************************* EVENTS **********************************/

document.addEventListener("DOMContentLoaded", () => {
    init()
    run()
})
