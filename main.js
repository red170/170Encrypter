function codificar() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const inputText = inputElement.value.toLowerCase();


    const convertedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    outputElement.value = `${convertedText}`;
}

function descodificar() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const inputText = inputElement.value.toLowerCase();

    const convertedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    outputElement.value = `${convertedText}`;
}

function limpiarTexto() {
    const textarea = document.getElementById('input');
    textarea.value = ''; 
}

function pegar() {

    navigator.clipboard.readText()
        .then(texto => {
            document.getElementById('input').value = texto;
        })
        .catch(error => {
            console.error('Error al leer el portapapeles:', error);
        });
}

function copiar() {
    const textarea = document.getElementById('output');
    textarea.select();

    document.execCommand('copy'); 
}