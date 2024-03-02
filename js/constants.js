
const width_canvas = 840

const height_canvas = 420

const FPS = 60

// Caracteristica de cada vehiculo
const DATA_CARS = [
    {
        type: "ambulance",
        id: 1,
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
        type: "sports",
        id: 2,
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
        type: "pickup",
        id: 3,
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
        type: "truck",
        id: 4,
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
        type: "bus",
        id: 5,
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

const MAPS = [

    // NIVEL 1
    [

    ],

    // NIVEL 2
    [

    ],

    // NIVEL 3
    [

    ]
]
