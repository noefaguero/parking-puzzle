// Caracteristica de cada vehiculo
const DATA_CARS = [
    {
        type_name: "ambulance",
        type: 1,
        img: {
            x: 140,
            y: 0,
            w: 140,
            h: 70
        },
        horizontally: true,
        draggable: false
    },
    {
        type_name: "sports",
        type: 2,
        img: {
            x: 140,
            y: 140,
            w: 140,
            h: 70
        },
        horizontally: true,
        draggable: true
    },
    {
        type_name: "pickup",
        type: 3,
        img: {
            x: 0,
            y: 0,
            w: 70,
            h: 140
        },
        horizontally: false,
        draggable: true
    },
    {
        type_name: "truck",
        type: 4,
        img: {
            x: 70,
            y: 0,
            w: 70,
            h: 210
        },
        horizontally: false,
        draggable: true
    },
    {
        type_name: "bus",
        type: 5,
        img: {
            x: 70,
            y: 210,
            w: 210,
            h: 70
        },
        horizontally: true,
        draggable: true
    }
]

// Mapa de cada nivel
const MAPS = [

    // NIVEL 1
    [
        [0, 0, 2, 0, 0, 4, 0, 0, 5, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 4, 0, 0, 3, 3, 0],
        [1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 4, 2, 0, 0, 3, 3, 5, 0, 0],
        [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0]
    ]
]
