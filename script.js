
function cepillarDientes() {
    console.log("1. Cepillando los dientes .... (entra y sale de la pila rapido)");
}
 
function bañarse() {
    cepillarDientes(); //se apila encima de bañarse
    console.log("2. cuerpo limpio (bañarse termina ahora)");
}
 
function empezarDia(){
    bañarse(); //se apila encima de empezarDia
    console.log("3. listo para trabajar (pila vacia )");
}
 
empezarDia(); //se apila empezarDia