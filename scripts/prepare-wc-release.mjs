import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist-wc');
const bundlePath = path.join(distDir, 'vis-badge.js');
const packageJsonPath = path.join(rootDir, 'package.json');

const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf8'));
const version = packageJson.version;

if (!version || typeof version !== 'string') {
  throw new Error('Missing or invalid "version" in package.json');
}

await mkdir(distDir, { recursive: true });

const bundle = await readFile(bundlePath);
const hash = createHash('sha256').update(bundle).digest('hex').slice(0, 8);

const immutableFile = `vis-badge.v${version}.${hash}.js`;
const semverFile = `vis-badge.v${version}.js`;

await writeFile(path.join(distDir, immutableFile), bundle);
await writeFile(path.join(distDir, semverFile), bundle);

const manifest = {
  version,
  hash,
  latestFile: 'vis-badge.js',
  semverFile,
  immutableFile,
  generatedAt: new Date().toISOString()
};

await writeFile(path.join(distDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Prepared WC release artifacts:
- dist-wc/vis-badge.js
- dist-wc/${semverFile}
- dist-wc/${immutableFile}
- dist-wc/manifest.json`);
