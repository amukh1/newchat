function go() {
    window.localStorage.setItem('first', document.getElementById('first').value)
    window.localStorage.setItem('last', document.getElementById('last').value)
    window.localStorage.setItem('mail', document.getElementById('mail').value)
    window.location.href = 'app'
}