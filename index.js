$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});

// Cambiar el texto de un botón al hacer clic
document.getElementById("btn-carts").addEventListener("click", function () {
  this.innerText = "Cargando...";
});

// Mostrar una alerta cuando el formulario se envía
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  var nombre = document.getElementById("floatingInputNombre").value;
  var apellido = document.getElementById("floatingInputApellido").value;
  var correo = document.getElementById("floatingInputCorreo").value;

  if (nombre === "" || apellido === "" || correo === "") {
    alert("Por favor, complete todos los campos.");
  } else {
    alert("Formulario enviado correctamente.");
  }
});

// Desplegar un modal automáticamente después de cierto tiempo
setTimeout(function () {
  var myModal = new bootstrap.Modal(
    document.getElementById("exampleModalToggle")
  );
  myModal.show();
}, 5000); // 5000 milisegundos = 5 segundos

// Agregar una animación a un elemento
document.getElementById("btn-carts").addEventListener("click", function () {
  this.classList.add("animate");
});
