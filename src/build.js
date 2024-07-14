//@ts-check
import fs from 'fs';
import data from './data';

const dir = 'dist';

const html = () => require('react-dom/server').renderToString(require('./app').default());
const css = require('sass')
    .compile('src/style.scss', {
        style: 'compressed',
    })
    .css.toString();

fs.writeFileSync(
    dir + '/index.html',
    fs
        .readFileSync('src/index.html', 'utf8')
        .replace('/* title */', data.title)
        .replace('<!-- app -->', html())
        .replace('/* style */', css)
);
