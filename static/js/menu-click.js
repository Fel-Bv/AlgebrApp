document.querySelectorAll('aside ul li').forEach((item) => {
    item.onclick = (evento) => {
        item.querySelector('a').click()
    }
})