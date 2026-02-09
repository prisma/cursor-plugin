#!/bin/bash
# Cursor beforeShellExecution hook: validate Prisma schema before "git commit".
# Reads JSON from stdin (command, cwd). Outputs permission allow/deny JSON to stdout.

set -e

echo "🔍 Validating Prisma schema..."

# Check if schema file exists
if [ ! -f "prisma/schema.prisma" ]; then
  echo "⚠️  No Prisma schema found at prisma/schema.prisma"
  exit 0
fi

# Validate schema syntax
if command -v npx &> /dev/null; then
  npx prisma validate
  echo "✅ Prisma schema is valid"
else
  echo "⚠️  npx not found, skipping validation"
fi

exit 0
