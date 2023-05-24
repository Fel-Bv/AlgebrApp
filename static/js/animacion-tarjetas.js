document.querySelectorAll('.tarjeta-info').forEach((tarjeta) => {
    tarjeta.addEventListener('mouseover', (evento) => {
        tarjeta.style.animation = 'agrandar-tarjeta 1s'
        setTimeout(() => {
            tarjeta.style.width = '90vw'
        }, 1000)
    })

    tarjeta.addEventListener('mouseleave', (evento) => {
        tarjeta.style.animation = 'achicar-tarjeta 1s'
        setTimeout(() => {
            tarjeta.style.width = '80vw'
        }, 1000)
    })
})
