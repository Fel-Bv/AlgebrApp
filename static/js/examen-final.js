const $examen = document.querySelector('.examen-final')
let cuenta = 1

$examen.querySelectorAll('form').forEach(($formulario) => {
  $formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()

  if ($formulario.querySelector('button').id == 'ultima-pregunta') {
    $examen.style.overflowY = 'scroll'
    $examen.querySelectorAll('button').forEach(($boton) => {
    $boton.style.visibility = 'hidden'
    })
    $examen.querySelectorAll('.pregunta').forEach(($pregunta) => {
    $pregunta.style.height = '60%'
    })
    $examen.scrollTop = 0
    return
  }

  $examen.style.animation = 'subir-pregunta 1s'
  setTimeout(() => {
    $examen.style.animation = ''
    $examen.scrollTop = document.documentElement.clientHeight * cuenta
    cuenta ++
  }, 1000)
  })
})