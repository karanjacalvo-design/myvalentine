const Amora = require('./lib/amora');
const path = require('path');
const fs = require('fs');

const app = new Amora();
const PORT = 3000;

/**
 * HELPER FUNCTION: serveFile
 * This reads a file from the /public folder and sends it to the browser.
 */
function serveFile(res, fileName, contentType) {
    const filePath = path.join(__dirname, 'public', fileName);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("404: File Not Found inside /public");
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

// 1. ROUTE: The Main Page (index.html)
app.get('/', (req, res) => {
    serveFile(res, 'index.html', 'text/html');
});

// 2. ROUTE: The Stylesheet (style.css)
app.get('/style.css', (req, res) => {
    serveFile(res, 'style.css', 'text/css');
});

// 3. ROUTE: The Logic (script.js)
app.get('/script.js', (req, res) => {
    serveFile(res, 'script.js', 'application/javascript');
});

// 4. ROUTE: The Music (if you have music.mp3 in /public)
app.get('/our-song.mp3', (req, res) => {
    serveFile(res, 'our-song.mp3', 'audio/mpeg');
});
// Add this inside index.js along with your other routes
app.get('/her-photo.jfif', (req, res) => {
    serveFile(res, 'her-photo.jfif', 'image/jpeg');
});
// Add this in index.js with your other app.get routes
app.get('/celebration.gif', (req, res) => {
    serveFile(res, 'celebration.gif', 'image/gif');
});

// START THE SERVER
app.listen(PORT, () => {
    console.log(`
    *****************************************
    ❤️  SUCCESS! AMORA FRAMEWORK IS LIVE  ❤️
    *****************************************
    URL: http://localhost:${PORT}
    *****************************************
    `);
});