//@ts-check
import fs from 'fs';
import { spawn } from 'child_process';

/**
 * @param {string} command
 * @param {readonly string[] | undefined} [args]
 * @param {import("child_process").SpawnOptionsWithoutStdio | undefined} [options]
 */
function spawnAsync(command, args, options) {
    return new Promise((resolve, reject) => {
        var child = spawn(command, args || [], options || {});
        child.stdout.on('data', (data) => process.stdout.write(data.toString()));
        child.stderr.on('data', (data) => process.stdout.write(data.toString()));
        child.on('close', (code) => (code === 0 ? resolve(code) : reject(code)));
    });
}

export async function buildAsync() {
    return spawnAsync('npx', ['babel-node', 'src/build.js']);
}
