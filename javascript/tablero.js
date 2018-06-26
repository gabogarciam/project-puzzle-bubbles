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

// Dibujamos el tablero
function dibujarTablero(ctx) {
    var x = 0; //posicion inicial en el canvas
    var y = 0; //posicion inicial en el canvas
    var xCirculo = 0; //Definimos la posicion x, y de inicio del circulo a dibujar
    var yCirculo = 0;
    var xTexto = 0; //Definimos la posicion de x, y del texto
    var yTexto = 0;
    var radio = tablero.celdaAncho/2; //El radio del circulo es la mitad de la celda, ya es un cuadrado
    var anguloInicio = 0;
    var anguloFin = 2 * Math.PI;
            
    tablero.celdas.forEach( function( columna, indiceY ) {
        columna.forEach( function( fila, indiceX ) {
            x = indiceY * tablero.celdaAncho; //Damos ancho y alto a cada celda en las posicion x , y de 40 para crear en grid o tabla
            y = indiceX * tablero.celdaAlto;
            
            xCirculo = x + (tablero.celdaAncho/2); //Definimos los puntos x,y dentro de la celda para poder dibujar el circulo.
            yCirculo = y + (tablero.celdaAlto/2);
                        
            xTexto = x + (tablero.celdaAncho/4);
            yTexto = y + (tablero.celdaAlto/2);

            ctx.beginPath();
            ctx.arc(xCirculo, yCirculo, radio, anguloInicio, anguloFin);
            ctx.stroke();
            ctx.font = "8px Arial";
            ctx.fillText( fila ,xTexto,yTexto);
        });
    });
}
