function imprimirNumeros() {
    let resultat = 0
    for(i=1; i<11; i++) {
        console.log(i)
        resultat = resultat+i;
    }
    document.getElementById("Resultat").textContent=resultat;
}