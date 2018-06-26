window.onload = function () {
    var container = null; //variable pata crear el div principal
    var button = null ; //variable para crear los botones
    var canvas;//
    var ctx;//contexto del canvas
    var game = null;
    
    //Creamos el intro del juego
    function buildSplash () {
        console.log('buildSplash()');
        container =  document.createElement("div"); //Creamos el elemento div
        container.setAttribute("class", "splashContainer"); //Definimos clase al div
        document.body.appendChild(container); //Agregamos el div al body
        button = document.createElement("span"); //Creamos el elemento span
        button.setAttribute("class", "btn-start btn"); //Definimos clase al boton
        button.innerText = "START GAME"; //Insertamos texto en el span
        container.appendChild(button); //Lo agregamos al div
        button.addEventListener("click", handleStartGame); //evento listener click en btn-start game
    }
    
    function handleStartGame() {
        destroySplash(); //Llamamos la funcion destroySplash
        buildGame(); //Llamamos la funcion buildGame
    }
    
    function destroySplash() {
        button.removeEventListener("click", handleStartGame); //Removemos el evento handleStartGame
        container.remove();//Removemos el div
    }

    //Creamos el splash de Game con el canvas
    function buildGame() {
        console.log('buildGame()');
        canvas = document.createElement("canvas"); //Creamos el elemento canvas
        canvas.setAttribute("width", "628px"); //Seteamos el ancho
        canvas.setAttribute("height", "628px"); //Seteamos el alto
        document.body.appendChild(canvas); //Lo agregamos al body
        ctx = canvas.getContext("2d"); //Definimos el contexto del canvas
        playGame(ctx);
    }

    function handleStartGameOver() {//Recuerda llamar este evento al finalizar el game!!!!
        destroyGame(); //Llamamos la funcion destroyGame
        buildGameOver(); //Llamamos la funcion buildGameOver
    }

    function destroyGame() {
        button.removeEventListener("click", handleStartGame); //Removemos el evento handleStartGameOver
        container.remove(); //Removemos el div
    }

    function buildGameOver() {
        container =  document.createElement("div"); //Creamos el div
        container.setAttribute("class", "gameOverContainer"); //Definimos la clase del div
        document.body.appendChild(container); //Agregamos el div al body
        button = document.createElement("span"); //Creamos el elemento span
        button.setAttribute("class", "btn-game btn"); //Definimos clase al boton
        button.innerText = "RESTART"; //Insertamos texto en el span
        container.appendChild(button); //Lo agregamos al div
        button.addEventListener("click", handleRestartGame); //evento listener click en btn game
        console.log('soy el GameOver');
    }

    function handleRestartGame() {
        console.clear();
        destroyGameOver(); //Llamamos la funcion destroyGameOver
        buildSplash(); //Llamamos la funcion buildSplash
    }

    function destroyGameOver() {
        button.removeEventListener("click", handleStartGameOver); //Removemos el evento handleStartGameOver
        container.remove(); //Removemos el div
    }

    //Funcion que iniciliza que carga el juego llamando a la funcion buildSplash
    function init() {
        buildSplash();
        
    }

    init();
}