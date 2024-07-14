//@ts-check
import express from 'express';
import fs from 'fs';
import { buildAsync } from './utils';

const app = express();
app.use(express.static('dist'));

app.listen(3002, () => {
    console.log('App is running on http://localhost:3002');
});

fs.watch(
    'src',
    {
        recursive: true,
    },
    async function (_event, filename) {
        if (!filename) return;

        // console.log('rebuilding');
        // await buildAsync();
        // console.log('rebuild done');

        console.log('Changes detected, rebuilding...');
        buildAsync();
        console.log('App is running on http://localhost:3002');
    }
);
