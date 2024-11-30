import path from 'path';
import fs from 'fs';
import { sync as writeFileAtomicSync } from 'write-file-atomic';
import { jsonParser } from '../../src/express-common.js'; // 确保文件路径正确
const SECRETS_FILE = 'secrets.json';

/**
 * Initialize the plugin.
 * @param {import('express').Router} router
 */
export async function init(router) {
    router.post('/switch', jsonParser, (req, res) => {
        const key = req.body.key;

        if (!key) {
            return res.status(400).json({ error: 'Missing key parameter' });
        }

        const filePath = path.join(req.user.directories.root, SECRETS_FILE);
        if (!fs.existsSync(filePath)) {
            const emptyFile = JSON.stringify({});
            writeFileAtomicSync(filePath, emptyFile, 'utf-8');
        }

        const fileContents = fs.readFileSync(filePath, 'utf-8');
        const secrets = JSON.parse(fileContents);
        const array = key + "_array";

        if (secrets[array]) {
            secrets["index"] = (Number(secrets["index"]) + 1) % secrets[array].length;
            secrets[key] = secrets[array][secrets["index"]];
            console.log("Switching Secret");
            writeFileAtomicSync(filePath, JSON.stringify(secrets, null, 4), 'utf-8');
        }

        return res.status(200).json({ success: true });
    });

    console.log('Multiple Secrets Plugin Initialized');
}

export async function exit() {
    // Nothing to do here
}

export const info = {
    id: 'multiple-secrets',
    name: 'Multiple Secrets',
    description: 'Switch secret keys when using multiple API keys simultaneously',
};