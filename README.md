## The problem I had

I need a browser:

* Minimal, there's only the url input may be?
* Always on top.
* Based on Chrome (because it currently has highest market share).
* Cross desktop platform: Linux, OS X.

## The solution I made

Take advantage from Chrome App, I built this one.

## Installation

1. Clone or download (then decompress) this repo
2. Open Chrome/Settings/Extensions, turn on `Developer mode`, press `Load unpacked extension...` and pick the directory where the repo was cloned (decompressed) to.
3. Open a new tab, press "Apps" on the bookmark bar and finally open `Kumohami`.

## Usage

* Hover the cursor on top of the app, the toolbar will appear, on the toolbar, you can type the url and press enter to access it, also, there's a draggable are on the right, you can reposition the app by dragging it.
* On Linux, the draggable area might not work with your window manager, bspwm in my case, use the way that the window manager provides to you.
