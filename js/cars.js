
const tilecar = document.createElement("IMG")
tilecar.setAttribute('src', "./assets/images/cars.png")

/**
 * Class representing a car.
 */
class Car {
    /**
     * Create a car.
     * @param {} _ctx 
     * @param {number} _x 
     * @param {number} _y 
     * @param {symbol} _direction 
     * @param {boolean} _draggable 
     */
    constructor(_ctx, _x, _y, _direction, _draggable) {
        this.ctx = _ctx
        this.x = _x
        this.y = _y
        this.tilecar = tilecar
        this.direction = _direction
        this.draggable = _draggable
    } 
}

/**
 * Class representing a ambulance.
 * @extends Car
 */
class Ambulance extends Car {
    constructor(_ctx, _x, _y, _direction, _draggable) {
        super(_ctx, _x, _y, _direction, _draggable)
        this.width = 140
        this.height = 70
        this.coordX = 140
        this.coordY = 0 // para el efecto de la sirena, se alterna la imagen
        this.free_traffic = false
    }

    draw() {

        this.coordY = this.coordY === 0 ? this.height : 0;

        this.ctx.drawImage(
            this.tilecar,
            this.width, this.coordY, // Coordenadas en imagen original
            this.width, this.height, // Dimensiones originales del fragmento
            this.x, this.y, // Coordenades en canvas
            this.width, this.height // Dimensiones en canvas
        ) 
    }
}

class Truck extends Car {
   
    constructor(_ctx, _x, _y, _direction, _draggable) {
        super(_ctx, _x, _y, _direction, _draggable)
        this.width = 70
        this.height = 140
        this.coordX = 70
        this.coordY = 0
    }
}

class Bus extends Car {
   
    constructor(_ctx, _x, _y, _direction, _draggable) {
        super(_ctx, _x, _y, _direction, _draggable)
        this.width = 70
        this.height = 140
        this.coordX = 70
        this.coordY = 0
    }
}
