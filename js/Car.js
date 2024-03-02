
const tilecar = document.createElement("IMG")
tilecar.setAttribute('src', "./assets/images/tilecar.png")

/**
 * Class representing a car.
 */
class Car {
    /**
     * Create a car.
     * @param {integer} id
     * @param {number} pos_x 
     * @param {number} pos_y 
     */
    constructor(id, pos_x, pos_y) {
        this.id = id
        // Datos según el tipo de vehiculo
        const { img, horizontally, draggable } = DATA_CARS.filter((car) => car.id == this.id)[0]
        this.w = img.w // ancho (px)
        this.h = img.h // alto (px)
        this.x = img.x // coordenada x (px)
        this.y = img.y // coordenada y (px)
        this.o = horizontally // orientación
        this.drag = draggable // indica si se puede arrastrar
        // Coordenadas en array bidimensional, es decir, la referencia para dibujar objetos en el canvas
        this.pos_x = pos_x
        this.pos_y = pos_y
    }

    draw() {

        const drawCar = () => {
            ctx.drawImage(
                tilecar,
                this.x, this.y, // Coordenadas en imagen original
                this.w, this.h, // Dimensiones originales del fragmento
                this.pos_x, this.pos_y, // Coordenades en canvas
                this.w, this.h // Dimensiones en canvas
            ) 
        }

        if (this.id === 1) { // si es una ambulancia
            // para el efecto de la sirena se alterna el fragmento que se recorta de tilecar
            this.y = this.y === 0 ? this.h : 0
        }

        drawCar()
    }
}