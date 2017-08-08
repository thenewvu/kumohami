chrome.app.runtime.onLaunched.addListener(() => {
  chrome.storage.local.get(outerBounds => {
    chrome.app.window.create(
      'index.html',
      {
        outerBounds,
        alwaysOnTop: true,
        frame: {
          type: 'none'
        }
      },
      createdWindow => {
        createdWindow.onBoundsChanged.addListener(() => {
          chrome.storage.local.set({
            width: createdWindow.outerBounds.width,
            height: createdWindow.outerBounds.height,
            top: createdWindow.outerBounds.top,
            left: createdWindow.outerBounds.left
          })
        })
      }
    )
  })
})
