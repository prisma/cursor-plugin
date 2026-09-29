#!/bin/bash
# Cursor beforeShellExecution hook: validate Prisma schema before "git commit".
# Outputs a Cursor permission decision as JSON.

set -e

# Check if schema file exists
if [ ! -f "prisma/schema.prisma" ]; then
  printf '{"permission":"allow"}\n'
  exit 0
fi

if command -v npx &> /dev/null; then
  if npx --no-install prisma validate >&2; then
    printf '{"permission":"allow"}\n'
  else
    printf '{"permission":"deny","user_message":"Prisma schema validation failed."}\n'
  fi
else
  printf '{"permission":"allow"}\n'
fi
