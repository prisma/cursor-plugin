#!/usr/bin/env node
/**
 * Generate TypeScript types after schema changes
 */

const { execFileSync } = require('node:child_process');
const { readFileSync } = require('node:fs');

const { file_path: schemaPath } = JSON.parse(readFileSync(0, 'utf8'));

if (!schemaPath?.endsWith('.prisma')) {
  process.exit(0);
}

try {
  execFileSync('npx', ['--no-install', 'prisma', 'generate', `--schema=${schemaPath}`], {
    stdio: ['ignore', 'ignore', 'inherit']
  });
} catch (error) {
  console.error('Failed to generate Prisma Client:', error.message);
  process.exit(1);
}
