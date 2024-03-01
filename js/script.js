
/******************************** REFERENCES *******************************/

let canvas
let ctx 
let ambulance

const width_canvas = 840
const height_canvas = 420
const FPS = 60

/******************************** FUNCTIONS ********************************/

const removeCanvas = () => {
    canvas.width = width_canvas
    canvas.height = height_canvas
}


const start = () => {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ambulance = new Ambulance(
        ctx, 
        TILECAR.ambulance.x, 
        TILECAR.ambulance.y, 
        DIRECTION.horizontal, 
        false)
    setInterval(sirenEffect, 400)
}


const sirenEffect = () => {
    removeCanvas()
    ambulance.draw()
}

/********************************* EVENTS **********************************/

document.addEventListener("DOMContentLoaded", start)
