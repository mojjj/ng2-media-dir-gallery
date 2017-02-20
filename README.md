# Angular 2 Media Gallery from Directory

Standalone serve media Website from a Directory e.g. to show on mobile Devices in your local WLAN. 
Supports Images / videos (mp4, 3gp, webm, via HTML5 video tag) see https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats
Browser: 
IE: 9.0+
Chrome: 4.0+
Firefox: 3.5+
Safari: 4.0+
Opera: 10.5+

The project consists of a gallery, a viewer and a script for image preparation.

Before using the gallery, you have to process all of your images that will be part of your gallery with the node.js script. 
The processed images will be stored to your applications assets. 
During runtime everything runs client-side and there is no separate server-side communication involved. 
The viewer takes care that an optimal image quality is served based on the device resolution.

It is based on https://github.com/BenjaminBrandmeier/angular2-image-gallery

## Demo

TODO

## How to use the gallery in your project
### Pre-requirements
Install **node (>= 4.2.2)** and **graphicsmagick**: http://www.graphicsmagick.org/README.html#installation

#### HowTo - Run convert script

```bash
convert.js path/to/your/media/basedir
```
Add a flag to define the order of the images inside the gallery

`-n` sort by file name (default)

`-d` sort chronologically by the original creation time (e.g. for coverages of a wedding)

`-c` sort by primary image color

#### HowTo - run for development

TODO

#### HowTo - run in production (low memory footprint, tested on Rasperry Pi 2 B+)

TODO

## Currently used tools

- Angular 2.3.1
- NodeJS 7.3.0
- Angular-CLI 1.0.0-beta.24
- graphicsmagick

## Troubleshooting

If the conversion process fails, make sure you have enough swap space provided.

If you experience any other issues, please raise an issue on GitHub.
