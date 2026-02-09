#!/usr/bin/env node
/**
 * Auto-format Prisma schema files on save
 */

const { execSync } = require('child_process');

const schemaPath = process.argv[2] || 'prisma/schema.prisma';

try {
  console.log(`📝 Formatting ${schemaPath}...`);
  execSync(`npx prisma format --schema=${schemaPath}`, {
    stdio: 'inherit'
  });
  console.log('✅ Schema formatted successfully');
} catch (error) {
  console.error('❌ Failed to format schema:', error.message);
  process.exit(1);
}
