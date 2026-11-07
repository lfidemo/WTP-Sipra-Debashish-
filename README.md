# Royal Wedding Invitation — HTML/CSS/JavaScript

A responsive, static wedding invitation website inspired by the supplied reference. No build tools, framework, backend, or package installation required.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in a browser, or use VS Code Live Server for best results.
3. Edit wedding names, dates, venues and event schedule in `js/script.js`, inside the `WEDDING` object.

## Deploy
Upload the complete contents of this folder to your hosting document root (for example `public_html/`). Keep the `css`, `js`, and `assets` folders in the same structure as `index.html`.

## Background music
The song is `assets/sahiba.mp3` (compressed to 112 kbps). It tries to start as soon as the page opens; browsers block sound until the visitor's first tap, so in that case it starts on the first tap. To change the song, replace that file (keep the name) or edit the `<audio>` tag in `index.html`. Use music you own or are licensed to use.

## Replace the generated artwork
The included `assets/royal-stage.jpg` is a custom-generated decorative background. Replace it with your own licensed artwork using the same filename, or update the CSS background URL in `css/style.css`.

## Important customization notes
- Countdown target is `WEDDING.date` in ISO format, including timezone offset.
- Update `dateLabel`, `dateRange`, venue names, addresses and Google Maps links.
- Each event is an object in `WEDDING.events`. Its `theme` (`mangal`, `haldi`, `sangeet`, `wedding`, `reception`) picks that event's colours, decorations and animation in `css/style.css`.
- Replace sample couple/family details before publishing.
- Page 1 is a Rajasthani palace gateway that plays automatically on load (about 5 seconds; a click skips it). Timing is in the `.intro.play` rules in `css/style.css` and `startIntro()` in `js/script.js`.
- The scratch card is a visual reveal interaction; it reveals the date and venue already printed beneath its canvas.
- Google Fonts require an internet connection. System serif fallbacks are included.

## Files
- `index.html` — page structure
- `css/style.css` — responsive styling and animations
- `js/script.js` — editable wedding data and interactions
- `assets/sahiba.mp3` — background song
- `assets/royal-stage.jpg` — royal wedding background (optimized JPEG)

## Scenic event themes
Sangeet pages use the blush-stage artwork and Haldi / Mehendi pages use the floral-canopy artwork, both in `assets/themes/` (each split into top, stretchable middle and bottom pieces, see "Scenic themes" in `css/style.css`). To swap the artwork, replace those image files.
