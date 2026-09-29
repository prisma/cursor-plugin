---
name: prisma-orm
description: Use for Prisma 8 ORM setup, schemas, queries, migrations, or upgrades. Read the official Prisma 8 skill even if the project has no local copy.
---

# Prisma ORM

1. Check the project's installed ORM package version, if any.
2. Read `.cursor/skills/prisma-8/SKILL.md` and the references it selects if the project has them. If the ORM package and Prisma 8 CLI are installed but the skill is missing, run `prisma skills sync` through the project's package manager and read the synced copy.
3. If no project copy is available, read the official [Prisma 8 skill](https://github.com/prisma/orm/blob/main/skills/prisma-8/SKILL.md) and the relevant references beside it. Use a source revision matching the installed ORM version when possible; use the current source for a new project.
4. If neither source can be read, use the [Prisma ORM documentation](https://www.prisma.io/docs/orm) and say which guidance was unavailable. Do not guess at an API.
