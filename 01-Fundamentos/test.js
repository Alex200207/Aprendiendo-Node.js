const js = require('fs');

const data = js.readFileSync('README.md', 'utf-8');

const nuevoArchivo = data.replace(/React/ig, 'Angular');

js.writeFileSync('README-Angular.md', nuevoArchivo);

