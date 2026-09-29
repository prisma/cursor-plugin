---
name: prisma-composer
description: Use when writing, testing, or deploying a Prisma Composer app. Load the Composer skill that matches the project's installed package.
---

# Prisma Composer guidance

1. Check the project's `@prisma/composer` version. Run the installed Prisma CLI's `skills sync` command through the project's package manager.
2. Read the project's `.cursor/skills/prisma-composer-core-concepts/SKILL.md` and follow its references. If the installed version or project config uses another name or skills directory, find the Composer skill with `prisma skills list`. The source lives in [prisma/composer](https://github.com/prisma/composer/tree/main/skills/prisma-composer-core-concepts), but the installed package copy matches the project's version.
3. If Composer is not installed or the skill cannot be read, use the [Composer documentation](https://www.prisma.io/docs/composer) to establish the supported setup first. Do not invent Composer APIs or deploy commands.
