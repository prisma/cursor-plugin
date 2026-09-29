---
name: prisma-composer
description: Use when writing, testing, or deploying a Prisma Composer app. Read the official Composer skill even if the project has no local copy.
---

# Prisma Composer

1. Check the installed `@prisma/composer` version, if any.
2. Find `prisma-composer-core-concepts/SKILL.md` in `.cursor/skills`, `.agents/skills`, or another project skill directory Cursor reads. Use it only when its `metadata.library_version` matches the installed Composer package. If missing or stale, run the installed CLI's `prisma skills sync` through the project's package manager, or read the skill shipped inside the installed Composer package.
3. If no usable local copy is available, read the official [Composer skill](https://github.com/prisma/composer/blob/main/skills/prisma-composer-core-concepts/SKILL.md) and its relevant references. Prefer a source revision matching the installed package; use the current source for a new project.
4. If the skill cannot be read, say so and use the [Composer documentation](https://www.prisma.io/docs/composer). Do not invent Composer APIs or deploy commands.
