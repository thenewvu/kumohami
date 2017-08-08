const webview = document.getElementById('webview')
const go = document.getElementById('tool-go')
const toolbar = document.getElementById('toolbar')

webview.addEventListener('loadstop', () => {
  webview.insertCSS({ file: 'webview.css' })
  webview.setZoom(0.7)
})

go.onkeypress = e => {
  if (e.which === 13) {
    webview.src = go.value
  }
}

document.onkeydown = e => {
  if (e.ctrlKey) {
    toolbar.classList.toggle('visible')
  }
}
