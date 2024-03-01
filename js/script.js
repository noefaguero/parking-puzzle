let canvas
let ctx 
let ambulance
const width_canvas = 420
const height_canvas = 420
const width_car = 70
const height_car = 140
const height_bus = 210
const FPS = 60


let tilemap = document.createElement("IMG")
tilemap.src = "./assets/images/cars.png"


class Ambulance {
    constructor(){
        this.x = 0
        this.y = 140
        this.width = height_car
        this.height = width_car
        this.draggable = false
        this.free_traffic = false
    }

    draw() {
        ctx.drawImage(
            tilemap, 
            this.width, 
            0, 
            this.width, 
            this.height, 
            this.x, 
            this.y, 
            this.width, 
            this.height
        ) 
    }
}

const start = () => {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    ambulance = new Ambulance()
    ambulance.draw()
}

document.addEventListener("DOMContentLoaded",  start)
