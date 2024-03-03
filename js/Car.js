
const tilecar = document.createElement("IMG")
tilecar.setAttribute('src', "./assets/images/tilecar.png")
// Tiempo del ultimo destello de la sirena
let lastSiren


class Car {
    
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

    move(direction) {
        let size// casillas que ocupa en el sentido del movimiento
        if (direction) { // sentido positivo
            if (this.horizontal) { // hacia la derecha
                size = this.w / 70 
                if (this.pos_x + size < 12 && checkCell(this.pos_x + size, this.pos_y)) {
                    // actualizar mapa
                    map[this.pos_y][this.pos_x] =  0 // antigua posicion
                    map[this.pos_y][this.pos_x+1] =  this.type // nueva posicion
                    // asignar nueva posicion al objeto
                    this.pos_x++
                    return true 
                }
            } else { // hacia abajo
                size = this.h / 70
                if (this.pos_y + size < 6 && checkCell(this.pos_x, this.pos_y + size)) {
                    map[this.pos_y][this.pos_x] =  0 
                    map[this.pos_y+1][this.pos_x] =  this.type 
                    this.pos_y++
                    return true 
                }
            }         
        } else { // sentido negativo
            if (this.horizontal) { // hacia la izquierda
                if (this.pos_x - 1 >= 0 && checkCell(this.pos_x - 1, this.pos_y)) {
                    map[this.pos_y][this.pos_x] =  0 
                    map[this.pos_y][this.pos_x-1] =  this.type 
                    this.pos_x--
                    return true 
                }
            } else { // hacia arriba
                if (this.pos_y - 1 >= 0 && checkCell(this.pos_x, this.pos_y - 1)) {
                    map[this.pos_y][this.pos_x] =  0 
                    map[this.pos_y-1][this.pos_x] =  this.type 
                    this.pos_y--
                    return true 
                }
            }
        }  
        return false
    }
}