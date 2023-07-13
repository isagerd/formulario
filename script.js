// Configura tu objeto de configuración de Firebase con tus credenciales
var firebaseConfig = {
  // Tu configuración de Firebase
  apiKey: "AIzaSyB8B-w-uzHxxO4JczDC0-nk8OsRGEAvP6A",
  authDomain: "qr-tc-4df4c.firebaseapp.com",
  projectId: "qr-tc-4df4c",
  storageBucket: "qr-tc-4df4c.appspot.com",
  messagingSenderId: "305649272197",
  appId: "1:305649272197:web:ad2465d532133d866cf0ec",
  measurementId: "G-2YPDXT3YTP",
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Obtén los valores de los campos del formulario
  var nombresApellidos = document.getElementById("nombresApellidos").value;
  var numeroDocumento = document.getElementById("numeroDocumento").value;
  var producto = document.getElementById("producto").value;
  var codigoAsesor = document.getElementById("codigoAsesor").value;
  var codigoOficina = document.getElementById("codigoOficina").value;
  var aceptaPolitica = document.getElementById("aceptaPolitica").value;

  // Obtén el valor seleccionado en el campo de política de privacidad
  var aceptaPolitica = document.getElementById("aceptaPolitica").value;

  // Verifica si el valor es "no"
  if (aceptaPolitica === "no") {
    // Muestra un pop-up o mensaje de advertencia
    alert("Debes aceptar la política de privacidad para enviar el formulario.");
    return; // Detiene el envío del formulario
  }

  // Si el valor es distinto de "no", el formulario se envía normalmente

  // Guarda los valores en Firestore
  db.collection("/CLIENTES")
    .add({
      nombresApellidos: nombresApellidos,
      numeroDocumento: numeroDocumento,
      producto: producto,
      codigoAsesor: codigoAsesor,
      codigoOficina: codigoOficina,
      aceptaPolitica: aceptaPolitica,
    })
    .then(function (docRef) {
      console.log("Documento guardado con ID: ", docRef.id);
      // Realiza cualquier acción adicional que desees después de guardar los datos
    })
    .catch(function (error) {
      console.error("Error al guardar el documento: ", error);
    });

  // Limpia el formulario después de enviarlo
  formulario.reset();
});
