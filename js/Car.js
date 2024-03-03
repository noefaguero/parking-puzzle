
const tilecar = document.createElement("IMG")
tilecar.setAttribute('src', "./assets/images/tilecar.png")
// Tiempo del ultimo destello de la sirena
let lastSiren

/**
 * Class representing a car.
 */
class Car {
    /**
     * Create a car.
     * @param {integer} type
     * @param {number} pos_x 
     * @param {number} pos_y 
     */
    constructor(type, pos_x, pos_y) {
        this.type = type
        // Datos según el tipo de vehiculo
        const { img, horizontally, draggable } = DATA_CARS.filter((car) => car.type == this.type)[0]
        this.w = img.w // ancho (px)
        this.h = img.h // alto (px)
        this.x = img.x // coordenada x (px)
        this.y = img.y // coordenada y (px)
        this.horizontal = horizontally // orientación horizontal (boolean)
        this.drag = draggable // indica si se puede arrastrar (boolean)
        // Coordenadas iniciales en array bidimensional, es decir, la referencia para dibujar objetos en el canvas
        this.pos_x = pos_x
        this.pos_y = pos_y
    }

    draw() {
        // Comprobar si es una ambulancia
        if (this.type === 1) {
            // Comprobar si ha pasado el tiempo suficiente
            const now = new Date().getTime()
            if (now - lastSiren > 400 || !lastSiren) {
                lastSiren = now
                // Se alterna el fragmento que se recorta de tilecar para el efecto sirena
                this.y = this.y === 0 ? 70 : 0
            }
        }
        ctx.drawImage(
            tilecar,
            this.x, this.y, // Coordenadas en imagen original
            this.w, this.h, // Dimensiones originales del fragmento
            this.pos_x*cell, this.pos_y*cell, // Coordenades en canvas
            this.w/70*cell, this.h/70*cell // Dimensiones en canvas
        ) 
    }
}