function playGame(ctx) {
    console.log('playGame()');
    inicializarTablero();//Llama a inicializarTablero que esta en el fichero tablero
    dibujarTablero(ctx);//Llama a dibujarTablero pasando el contexto ctx del canvas
    //console.clear();
}