// Función para ocultar la imagen cuando se detecta texto en el cuadro de texto
function hideImage() {
    var textboxInput = document.getElementById("textbox-input");
    var textboxRight = document.getElementById("textbox-right");
    var image = document.getElementById("image");
    var copiar = document.getElementById("copiar");
    var textBelowImage = document.getElementById("text-below-image");
    if (textboxInput.value.trim() !== "") { // Si el valor del cuadro de texto no está vacío
        image.style.display = "none"; // Ocultar la imagen
        textBelowImage.style.display = "none"; // Ocultar el texto debajo de la imagen
        copiar.style.display = "flex";
        textboxRight.value = textboxInput.value;

    } else {
        image.style.display = "block"; // Mostrar la imagen
        textBelowImage.style.display = "block"; // Mostrar el texto debajo de la imagen
        copiar.style.display = "none";
        textboxRight.value = "";
    }
}

// Función para encriptar el texto en el cuadro de texto derecho
function encryptText() {
    var textboxRight = document.getElementById("textbox-right");
    var text = textboxRight.value.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    textboxRight.value = text;
}

// Función para desencriptar el texto en el cuadro de texto derecho
function decryptText() {
    var textboxRight = document.getElementById("textbox-right");
    var text = textboxRight.value.toLowerCase();
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    textboxRight.value = text;
    }

// Función para copiar el texto en el cuadro de texto derecho
function copyText(message) {
    var textboxRight = document.getElementById("textbox-right");
    var notification = document.getElementById("notification");
    textboxRight.select();
    document.execCommand("copy");
    notification.innerHTML = "Texto copiado";
    notification.style.opacity = "1";
    notification.style.pointerEvents = "auto";
    setTimeout(function() {
      hideNotification();
    }, 2000);
  }

  // Función para ocultar la notificación
  function hideNotification() {
    var notification = document.getElementById("notification");
    notification.style.opacity = "0";
    notification.style.pointerEvents = "none";
  }