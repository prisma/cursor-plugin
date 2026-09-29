---
name: prisma-orm
description: Use for Prisma 8 ORM setup, schemas, queries, migrations, or upgrades. Read the official Prisma 8 skill even if the project has no local copy.
---

# Prisma ORM

1. Check the installed `@prisma/orm-*` version. To implement Prisma 8 in a new project without one, follow the [Prisma 8 setup guide](https://www.prisma.io/docs/getting-started) first; the ORM skill requires an installed package and emitted contract.
2. Find `prisma-8/SKILL.md` in `.cursor/skills`, `.agents/skills`, or another project skill directory Cursor reads. Use it only when its `metadata.library_version` matches the installed ORM package. If missing or stale, run the installed CLI's `prisma skills sync` through the project's package manager, or read the skill shipped inside the installed ORM package.
3. If no usable local copy is available, read the official [Prisma 8 skill](https://github.com/prisma/orm/blob/main/skills/prisma-8/SKILL.md) and its relevant references. Prefer a source revision matching the installed package; use the current source for a new project after setup.
4. If the skill cannot be read, say so and use the [Prisma ORM documentation](https://www.prisma.io/docs/orm). Do not guess at an API.
