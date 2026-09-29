---
name: prisma-composer
description: Use when writing, testing, or deploying a Prisma Composer app. Read the official Composer skill even if the project has no local copy.
---

# Prisma Composer

1. Check the project's installed `@prisma/composer` version, if any.
2. Read `.cursor/skills/prisma-composer-core-concepts/SKILL.md` and its references if the project has them. If Composer and the Prisma 8 CLI are installed but the skill is missing, run `prisma skills sync` through the project's package manager and read the synced copy.
3. If no project copy is available, read the official [Composer skill](https://github.com/prisma/composer/blob/main/skills/prisma-composer-core-concepts/SKILL.md) and the relevant references beside it. Use a source revision matching the installed Composer version when possible; use the current source for a new project.
4. If neither source can be read, use the [Composer documentation](https://www.prisma.io/docs/composer) and say which guidance was unavailable. Do not invent Composer APIs or deploy commands.
