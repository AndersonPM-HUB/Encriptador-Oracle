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
  let textoencriptado = "";
  console.log(textoM);

  for (let i = 0; i < textoM.length; i++) {
    let letra = textoM[i];
    console.log(letra)
    if (letra === "e" ) {
      textoencriptado += "enter";
      
    } else if (letra === "i" ) {
      textoencriptado += "imes";
     
    } else if (letra === "a") {
      textoencriptado += "ai";
     
    } else if (letra === "o" ) {
      textoencriptado += "ober";
    
    } else if (letra === "u") {
      textoencriptado += "ufat";
    } else {
      textoencriptado += letra;
    }
  }
  console.log(textoencriptado);

  if (resultado && mensaje) {
    mensaje.style.display = 'none'; // Ocultar el div "mensaje"
    parrafo.textContent = textoencriptado;
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
  let textoDesencriptado = ""

  for (let i = 0; i < textoM.length; i++) {
    let letra = textoM[i];
    console.log(letra)
    if (letra === "e" && textoM.slice(i, i + 5) === "enter") {
      textoDesencriptado += "e";
      i += 4;
       // Saltar los caracteres adicionales encriptados
    } else if (letra === "i" && textoM.slice(i, i + 4) === "imes") {
      textoDesencriptado += "i";
      i += 3; // Saltar los caracteres adicionales encriptados
    } else if (letra === "a" && textoM.slice(i, i + 2) === "ai") {
      textoDesencriptado += "a";
      i += 1; // Saltar los caracteres adicionales encriptados
    } else if (letra === "o" && textoM.slice(i, i + 4) === "ober") {
      textoDesencriptado += "o";
      i += 3; // Saltar los caracteres adicionales encriptados
    } else if (letra === "u" && textoM.slice(i, i + 4) === "ufat") {
      textoDesencriptado += "u";
      i += 3; // Saltar los caracteres adicionales encriptados
    } else {
      textoDesencriptado += letra;
    }
  }
  console.log(textoDesencriptado);

  if(resultado){
    mensaje.style.display = 'none'; // Ocultar el div "mensaje"
    parrafo.textContent= textoDesencriptado
    resultado.appendChild(parrafo); // Agregar el párrafo al div "resultado"
    resultado.appendChild(button); //
    button.addEventListener("click", copy);

  }
 
}

async function copy() {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Texto copiado',
      showConfirmButton: false,
      timer: 1000
    })

    let text=document.getElementById('parrafotexto')
    console.log(text.textContent)
    await navigator.clipboard.writeText(text.textContent)
    .then(function() {
       
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

