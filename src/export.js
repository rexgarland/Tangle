const fs = require('fs');
const path = require('path');

const Handlebars = require("handlebars");

// get template
const html = fs.readFileSync('src/example.html', 'utf8');
const template = Handlebars.compile(html);

// get data
const data = {
	style: fs.readFileSync('src/example.css', 'utf8'),
	tangleKitStyle: fs.readFileSync('src/TangleKit/TangleKit.css', 'utf8'),
	script: fs.readFileSync('dist/bundle.js', 'utf8')
}

// save
const output = template(data);
const outpath = path.resolve(__dirname, '..', 'dist/document.html')
fs.writeFileSync(outpath, output, 'utf8');

