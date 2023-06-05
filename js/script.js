var resultado = document.querySelector('.resultado');
var parrafo = document.createElement('p');
parrafo.id="parrafotexto";
var button = document.createElement("button")
button.textContent="Copiar/Pegar";
button.id = "miBoton";
var mensaje = document.getElementById('mensaje');

function encriptar() {
  let texto = document.getElementById("id-texto").value;
  console.log(texto);

  if (texto !== "") {
    console.log("El contenido del campo es: " + texto);
  } else {
    alert("El campo está vacío. Por favor, ingresa un valor.");
    //obtener la imagen para oculatarla
  }
  let textoM = texto.toLowerCase();
  let textoencritado = "";
  console.log(textoM);

  for (var i = 0; i < textoM.length; i++) {
    var letra = textoM.charAt(i);
    console.log(letra);
    if (letra === "e") {
      textoencritado += "enter";
    } else if (letra === "i") {
      textoencritado += "imes";
    } else if (letra === "a") {
      textoencritado += "ai";
    } else if (letra === "o") {
      textoencritado += "ober";
    } else if (letra === "u") {
      textoencritado += "ufat";
    } else {
      textoencritado += letra;
    }
  }
  console.log(textoencritado);

  if (resultado && mensaje) {
    mensaje.style.display = 'none'; // Ocultar el div "mensaje"
    parrafo.textContent = textoencritado;
    resultado.appendChild(parrafo); // Agregar el párrafo al div "resultado"
    resultado.appendChild(button); //

    button.addEventListener("click", copy);
  }

 

}

function desencriptar(){
  let texto2 = document.getElementById("id-texto").value;
  console.log(texto2);

  if (texto2 !== "") {
    console.log("El contenido del campo es: " + texto2);
  } else {
    alert("El campo está vacío. Por favor, ingresa un valor.");
    //obtener la imagen para oculatarla
  }
  let textoM = texto2.toLowerCase();
  console.log(textoM)
  if (textoM.includes('enter')){
    textoM = textoM.replace('enter', 'e')
  }if (texto2.includes('imes')){
    textoM = textoM.replace('imes', 'i')
  }if (texto2.includes('ai')){
    textoM=textoM.replace('ai', 'a')
  }if (texto2.includes('ober')){
    textoM=textoM.replace('ober', 'o')
  }if (texto2.includes('ufat')){
    textoM= textoM.replace('ufat', 'u')
  }
  console.log(textoM);

  if(resultado){
    mensaje.style.display = 'none'; // Ocultar el div "mensaje"
    parrafo.textContent= textoM
    resultado.appendChild(parrafo); // Agregar el párrafo al div "resultado"
    resultado.appendChild(button); //
    button.addEventListener("click", copy);

  }
 
}

async function copy() {
    let text=document.getElementById('parrafotexto')
    console.log(text.textContent)
    await navigator.clipboard.writeText(text.textContent)
    .then(function() {
        // Éxito al copiar el texto
        button.addEventListener("click", page);
        
    })
    .catch(function(error) {
        // Error al copiar el texto
        console.error("Error al copiar el texto: ", error);
    });
}

async function page(){
    try {
        const text = await navigator.clipboard.readText();
        let area = document.getElementById("id-texto");
        area.value = text;
        parrafo.textContent ='';
       
    } catch (error) {
          console.log(`Ocurrió un error: ${error}`);
    }

}

