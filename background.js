/* global chrome */

function onAppLoaded() {
  const winOpts = { id: Date.now().toString(), alwaysOnTop: true, frame: { type: 'none' } }
  chrome.app.window.create('index.html', winOpts)
}

chrome.app.runtime.onLaunched.addListener(onAppLoaded)
