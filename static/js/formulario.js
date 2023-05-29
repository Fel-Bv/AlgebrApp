const $formulario = document.getElementById('formulario-practica')

$formulario.onsubmit = (evento) => {
  evento.preventDefault()

  if ($formulario.querySelector('input[value="correcto"]').checked) {
    window.location.href = "paso2.html"
  }
}
