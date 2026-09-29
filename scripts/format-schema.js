#!/usr/bin/env node
/**
 * Auto-format Prisma schema files after agent edits
 */

const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');

const { file_path: schemaPath } = JSON.parse(readFileSync(0, 'utf8'));

if (!schemaPath?.endsWith('.prisma')) {
  process.exit(0);
}

try {
  execFileSync('npx', ['--no-install', 'prisma', 'format', `--schema=${schemaPath}`], {
    stdio: ['ignore', 'ignore', 'inherit']
  });
} catch (error) {
  console.error('Failed to format Prisma schema:', error.message);
  process.exit(1);
}
