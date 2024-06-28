function cambiarColor() {
    // Genera un color hexadecimal aleatorio
    var color = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = color;
}