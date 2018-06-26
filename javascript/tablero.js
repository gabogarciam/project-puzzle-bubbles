//Creamos el objeto board
var tablero = {
    columnas: 15,    // Numero de azulejos por columna.
    filas: 14,       // Nummero of azulejos por fila.
    celdaAncho: 40,  // Ancho del azulejo.
    celdaAlto: 40, //Alto del azulejo.
    celdas: []       //Array vacio que se convertira en un array de dos dimensiones.
};

//Funcion para inicializar el tablero
function inicializarTablero() {
    console.log( tablero );
    for (i = 0; i < tablero.columnas; i++) { //Recorremos las columnas
        tablero.celdas[i] = [];
        for (j = 0; j < tablero.filas; j++) { //Recorremos las filas
            tablero.celdas[i][j] = '(' + i + ',' + j + ')';//Guardamos la posicion de la columna y la fila dentro del array
        }
    }
}

