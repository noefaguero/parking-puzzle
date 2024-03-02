
let ambulance

const removeCanvas = () => {
    canvas.width = width_canvas
    canvas.height = height_canvas
}

const run = () => {
    ambulance = new Car(
        1,
        0, 
        140)
    setInterval(sirenEffect, 400)
}

const sirenEffect = () => {
    removeCanvas()
    ambulance.draw()
}

/********************************* EVENTS **********************************/

document.addEventListener("DOMContentLoaded", () => {
    init()
    run()
})
